const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const objectId = require("mongoose").Types.ObjectId;
const Client = require("../models/clients_models");
const jwt = require("jsonwebtoken");
const passport = require('passport')

router.post("/register", (req, res) => {
  var {
    username: v_username,
    password: v_password,
    first_name: v_first_name,
    last_name: v_last_name,
    phone_number: v_phone_number,
    address: v_address,
    email: v_email,
  } = req.body;
  if (
    v_username == null ||
    v_password == null ||
    v_first_name == null ||
    v_last_name == null ||
    v_phone_number == null ||
    v_address == null ||
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
        const newClient = new Client({
          username: v_username,
          password: v_password,
          first_name: v_first_name,
          last_name: v_last_name,
          phone_number: v_phone_number,
          address: v_address,
          email: v_email,
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

router.post("/loginn", (req, res) => {
  const { email, password } = req.body;
  Client.findOne({ email })
    .then((user) => {
      if (!user) res.sendStatus(404);
      else {
        bcrypt
          .compare(password, user.password)
          .then((isMatched) => {
            if (isMatched) {
              const payload = { id: user._id, email: user.email };
              jwt.sign(
                payload,
                "session",
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) res.sendStatus(500);
                  else res.json({ token: token });
                }
              );
            } else {
              res.sendStatus(400);
            }
          })
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.log("Server Error"));
});

router.get(
  "/validate",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

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
  const { username: v_username, password: v_password } = req.params;
  if (v_username == null || v_password == null) {
    res.json({
      error: { code: -5, message: "one or multiple arguments are missing" },
    });
  } else {
    Client.findOne(
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
    Client.findOneAndDelete({ _id: v_id })
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
          Client.findOneAndUpdate({ _id: v_id }, { $set: newData })
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
                error: {
                  code: -1,
                  message: "failed to connect/access to database",
                },
              })
            );
        }
      });
    } else {
      Client.findOneAndUpdate({ _id: v_id }, { $set: newData })
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
            error: {
              code: -1,
              message: "failed to connect/access to database",
            },
          })
        );
    }
  }
});

module.exports = router;
