const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const objectId = require("mongoose").Types.ObjectId;
const ServiceProvider = require("../models/serviceProvider_models");

router.post("/register", (req, res) => {
  var {
    username: v_username,
    password: v_password,
    first_name: v_first_name,
    last_name: v_last_name,
    phone_number: v_phone_number,
    email: v_email,
  } = req.body;
  if (
    v_username == null ||
    v_password == null ||
    v_first_name == null ||
    v_last_name == null ||
    v_phone_number == null ||
    v_email == null
  ) {
    res.json({
      error: { code: -5, message: "one or multiple arguments are missing" },
    });
  } else {
    var salt = 8;
    bcrypt.hash(v_password, salt, (err, encrypted) => {
      if (err) {
        res.json({ error: { code: -6, message: "failed to hash password" } });
      } else {
        v_password = encrypted;
        const newServiceProvider = new ServiceProvider({
          username: v_username,
          password: v_password,
          first_name: v_first_name,
          last_name: v_last_name,
          phone_number: v_phone_number,
          email: v_email,
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
  const { username: v_username, password: v_password } = req.params;
  if (v_username == null || v_password == null) {
    res.json({
      error: { code: -5, message: "one or multiple arguments are missing" },
    });
  } else {
    ServiceProvider.findOne(
      { username: v_username },
      { first_name: 1, last_name: 1, password: 1 }
    )
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -2, message: "authentication failed" },
          });
        } else {
          bcrypt.compare(v_password, data.password, function (err, result) {
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
  const { id: v_id } = req.params;
  if (objectId.isValid(v_id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    ServiceProvider.findOneAndDelete({ _id: v_id })
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
  const { id: v_id } = req.params;
  if (objectId.isValid(v_id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    var newData = {};
    newData = req.body;
    if (newData.password) {
      var salt = 8;
      bcrypt.hash(newData.password, salt, (err, encrypted) => {
        if (err) {
          res.json({ error: { code: -6, message: "failed to hash password" } });
        } else {
          newData.password = encrypted;
          ServiceProvider.findOneAndUpdate({ _id: v_id }, { $set: req.body })
            .then((data) => {
              if (data == null) {
                res.json({
                  error: {
                    code: -4,
                    message: "failed to update serviceProvider",
                  },
                });
              } else {
                res.json({
                  result: { message: "serviceProvider updated successfully" },
                });
              }
            })
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
    ServiceProvider.findOneAndUpdate({ _id: v_id }, { $set: req.body })
      .then((data) => {
        if (data == null) {
          res.json({
            error: {
              code: -4,
              message: "failed to update serviceProvider",
            },
          });
        } else {
          res.json({
            result: { message: "serviceProvider updated successfully" },
          });
        }
      })
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

module.exports = router;
