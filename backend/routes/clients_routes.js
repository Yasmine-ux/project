const express = require("express");
const router = express.Router();

const Client = require("../models/clients_models");

router.post("/add_client", (req, res) => {
  const { first_name, last_name, phone_number, adress, email } = req.body;
  const newClient = new Client({
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
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/clients", (req, res) => {
  Client.find()
    .then((data) => res.json({ clients: data }))
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/client/:id", (req, res) => {
  const { id } = req.params;
  Client.findOne({ _id: id })
    .then((data) => {
      if (data == null) {
        res.json({
          error: { code: -2, message: "failed to find client" },
        });
      } else {
        res.json({
          result: { client: data },
        });
      }
    })
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.delete("/remove_client/:id", (req, res) => {
  const { id } = req.params;
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
});

router.put("/update_client/:id", (req, res) => {
  const { id } = req.params;
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
});

module.exports = router;
