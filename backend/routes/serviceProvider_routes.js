const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const objectId = require("mongoose").Types.ObjectId;
const ServiceProvider = require("../models/serviceProvider_models");

router.post("/register", (req, res) => {
  var {
    username,
    password,
    first_name,
    last_name,
    phone_number,
    email,
  } = req.body;
  if (
    username == null ||
    password == null ||
    first_name == null ||
    last_name == null ||
    phone_number == null ||
    email == null
  ) {
    res.json({
      error: { code: -5, message: "one or multiple arguments are missing" },
    });
  } else {
    var salt = 8;
    bcrypt.hash(password, salt, (err, encrypted) => {
      if (err) {
        res.json({ error: { code: -6, message: "failed to hash password" } });
      } else {
        password = encrypted;
        const newServiceProvider = new ServiceProvider({
          username,
          password,
          first_name,
          last_name,
          phone_number,
          email,
        });
        newServiceProvider
          .save()
          .then((data) => res.json({ serviceProvider: data }))
          .catch((err) =>
            res.json({
              error: {
                code: -1,
                message: "failed to connect/access to database",
              },
            })
          );
      }
    });
  }
});

router.get("/", (req, res) => {
  ServiceProvider.find()
    .then((data) => res.json({ serviceProvider: data }))
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/authenticate/:username/:password", (req, res) => {
  const { username, password } = req.params;
  if (username == null || password == null) {
    res.json({
      error: { code: -5, message: "one or multiple arguments are missing" },
    });
  } else {
    ServiceProvider.findOne(
      { username: username },
      { first_name: 1, last_name: 1, password: 1 }
    )
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -2, message: "authentication failed" },
          });
        } else {
          bcrypt.compare(password, data.password, function (err, result) {
            if (result == true) {
              res.json({
                result: {
                  message: "authentication done successfully",
                  data: {
                    first_name: data.first_name,
                    last_name: data.last_name,
                  },
                },
              });
            } else {
              res.json({
                error: { code: -2, message: "authentication failed" },
              });
            }
          });
        }
      })
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
  }
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  if (objectId.isValid(id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    ServiceProvider.findOneAndDelete({ _id: id })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -3, message: "failed to delete serviceProvider" },
          });
        } else {
          res.json({
            result: { message: "serviceProvider deleted successfully" },
          });
        }
      })
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
  }
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  if (objectId.isValid(id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    ServiceProvider.findOneAndUpdate({ _id: id }, { $set: req.body })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -4, message: "failed to update serviceProvider" },
          });
        } else {
          res.json({
            result: { message: "serviceProvider updated successfully" },
          });
        }
      })
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
  }
});

module.exports = router;
