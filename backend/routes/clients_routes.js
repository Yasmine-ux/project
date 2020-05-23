const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const objectId = require("mongoose").Types.ObjectId;
const Client = require("../models/clients_models");

router.post("/register", (req, res) => {
  var {
    username,
    password,
    first_name,
    last_name,
    phone_number,
    adress,
    email,
  } = req.body;
  if (
    username == null ||
    password == null ||
    first_name == null ||
    last_name == null ||
    phone_number == null ||
    adress == null ||
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
        const newClient = new Client({
          username,
          password,
          first_name,
          last_name,
          phone_number,
          adress,
          email,
        });
        newClient
          .save()
          .then((data) => res.json({ client: data }))
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
  Client.find()
    .then((data) => res.json({ clients: data }))
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
    Client.findOne(
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
    Client.findOneAndDelete({ _id: id })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -3, message: "failed to delete client" },
          });
        } else {
          res.json({
            result: { message: "client deleted successfully" },
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
    Client.findOneAndUpdate({ _id: id }, { $set: req.body })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -4, message: "failed to update client" },
          });
        } else {
          res.json({
            result: { message: "client updated successfully" },
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
