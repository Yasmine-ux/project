const express = require("express");
const router = express.Router();

const ServiceProvider = require("../models/serviceProvider_models");

router.post("/add_serviceProvider", (req, res) => {
  const { first_name, last_name, phone_number, email, service } = req.body;
  const newServiceProvider = new ServiceProvider({
    first_name,
    last_name,
    phone_number,
    email,
    service
  });
  newServiceProvider
    .save()
    .then((data) => res.json({ serviceProvider: data }))
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/serviceProvider", (req, res) => {
  ServiceProvider.find()
    .then((data) => res.json({ serviceProvider: data }))
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/serviceProvider/:id", (req, res) => {
  const { id } = req.params;
  ServiceProvider.findOne({ _id: id })
    .then((data) => {
      if (data == null) {
        res.json({
          error: { code: -2, message: "failed to find serviceProvider" },
        });
      } else {
        res.json({
          result: { serviceProvider: data },
        });
      }
    })
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.delete("/remove_serviceProvider/:id", (req, res) => {
  const { id } = req.params;
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
});

router.put("/update_serviceProvider/:id", (req, res) => {
  const { id } = req.params;
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
});

module.exports = router;
