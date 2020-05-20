const express = require("express");
const router = express.Router();

const Service = require("../models/services_models");

router.post("/add_service", (req, res) => {
  const { title, category, description, id_serviceProvider } = req.body;
  const newService = new Service({
    title,
    category,
    description,
    id_serviceProvider,
    id_client: null
  });
  newService
    .save()
    .then((data) => res.json({ service: data }))
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/services", (req, res) => {
  Service.find()
    .then((data) => res.json({ services: data }))
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/service/:id", (req, res) => {
  const { id } = req.params;
  Service.findOne({ _id: id })
    .then((data) => {
      if (data == null) {
        res.json({
          error: { code: -2, message: "failed to find service" },
        });
      } else {
        res.json({
          result: { service: data },
        });
      }
    })
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.delete("/remove_service/:id", (req, res) => {
  const { id } = req.params;
  Service.findOneAndDelete({ _id: id })
    .then((data) => {
      if (data == null) {
        res.json({
          error: { code: -3, message: "failed to delete service" },
        });
      } else {
        res.json({
          result: { message: "service deleted successfully" },
        });
      }
    })
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.put("/update_service/:id", (req, res) => {
  const { id } = req.params;
  Service.findOneAndUpdate(
    { _id: id },
    { $set: req.body }
  )
    .then((data) => {
      if (data == null) {
        res.json({
          error: { code: -4, message: "failed to update service" },
        });
      } else {
        res.json({
          result: { message: "service updated successfully" },
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
