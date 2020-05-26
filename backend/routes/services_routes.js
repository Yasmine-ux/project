const express = require("express");
const router = express.Router();
const objectId = require("mongoose").Types.ObjectId;
const Service = require("../models/services_models");

router.post("/add", (req, res) => {
  const { 
    title: v_title, 
    description: v_description, 
    id_category: v_id_category, 
    id_serviceProvider: v_id_serviceProvider 
  } = req.body;
  if (
    v_title == null ||
    v_description == null ||
    v_id_category == null ||
    v_id_serviceProvider == null
  ) {
    res.json({
      error: { code: -5, message: "one or multiple arguments are missing" },
    });
  } else {
    const newService = new Service.ServiceCollection({
      title: v_title, 
      description: v_description, 
      id_category: v_id_category, 
      id_serviceProvider: v_id_serviceProvider,
      id_client: null,
      status: false,
    });
    newService
      .save()
      .then((data) => res.json({ service: data }))
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
  }
});

router.get("/", (req, res) => {
  Service.ServiceCollection.find()
    .then((data) => res.json({ services: data }))
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/getOne/:id", (req, res) => {
  const { id: v_id } = req.params;
  if (objectId.isValid(v_id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    Service.ServiceCollection.findOne({ _id: v_id })
      .then((serviceData) => {
        if (serviceData == null) {
          res.json({
            error: { code: -2, message: "failed to find service" },
          });
        } else {
          var queries = [];
          queries.push(function (callback) {
            Service.ServiceProviderCollection.findOne(
              {
                _id: serviceData.id_serviceProvider,
              },
              {
                first_name: 1,
                last_name: 1,
                _id: 0,
              }
            ).then((serviceProviderData) => {
              callback(null, serviceProviderData);
            });
          });
          queries.push(function (callback) {
            Service.clientCollection
              .findOne(
                {
                  _id: serviceData.id_client,
                },
                {
                  first_name: 1,
                  last_name: 1,
                  _id: 0,
                }
              )
              .then((clientData) => {
                callback(null, clientData);
              });
          });
          queries.push(function (callback) {
            Service.categoriesCollection
              .findOne(
                {
                  _id: serviceData.id_category,
                },
                {
                  title: 1,
                  _id: 0,
                }
              )
              .then((categoryData) => {
                callback(null, categoryData);
              });
          });
          var async = require("async");
          async.parallel(queries, function (err, queriesResult) {
            if (err) {
              throw err;
            } else {
              var result = {};
              result.title = serviceData.title;
              result.description = serviceData.description;
              result.serviceProvider = queriesResult[0];
              result.client = queriesResult[1];
              result.category = queriesResult[2];
              result.status = serviceData.status
              res.json({
                result: {
                  data: result
                },
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
    Service.ServiceCollection.findOneAndDelete({ _id: v_id })
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
  }
});

router.put("/update/:id", (req, res) => {
  const { id: v_id } = req.params;
  if (objectId.isValid(v_id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    Service.ServiceCollection.findOneAndUpdate({ _id: v_id }, { $set: req.body })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -3, message: "failed to update service" },
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
  }
});

router.put("/request/:id_client/:id_service", (req, res) => {
  const { id_client: v_id_client, id_service: v_id_service } = req.params;
  if (
    objectId.isValid(v_id_client) == false ||
    objectId.isValid(v_id_service) == false
  ) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    Service.ServiceCollection.findOneAndUpdate(
      { _id: v_id_service },
      { $set: { id_client: v_id_client } }
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
  }
});

router.put("/response/:id_service/:status", (req, res) => {
  var { status: v_status, id_service: v_id_service } = req.params;
  if (objectId.isValid(v_id_service) == false || typeof v_status === "boolean") {
    res.json({
      error: { code: -6, message: "check input" },
    });
  } else {
    var update = {};
    v_status = JSON.parse(v_status);
    if (v_status) {
      update.status = true;
    } else {
      update.id_client = null;
      update.status = false;
    }
    Service.ServiceCollection.findOneAndUpdate(
      { _id: v_id_service },
      { $set: update }
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
  }
});

module.exports = router;
