const express = require("express");
const router = express.Router();
const objectId = require("mongoose").Types.ObjectId;
const Category = require("../models/categories_models");

router.post("/add", (req, res) => {
  const { title: v_title, photo_URL: v_photo_URL } = req.body;
  if (v_title == null || v_photo_URL == null) {
    res.json({
      error: { code: -5, message: "one or multiple arguments are missing" },
    });
  } else {
    const newCategory = new Category({
      title: v_title,
      photo_URL: v_photo_URL,
    });
    newCategory
      .save()
      .then((data) => res.json({ category: data }))
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
  }
});

router.get("/", (req, res) => {
  Category.find()
    .then((data) => res.json({ categories: data }))
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
    Category.findOne({ _id: v_id })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -2, message: "failed to find category" },
          });
        } else {
          res.json({
            result: { category: data },
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
  if ( objectId.isValid(v_id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
  Category.findOneAndDelete({ _id: v_id })
    .then((data) => {
      if (data == null) {
        res.json({
          error: { code: -3, message: "failed to delete category" },
        });
      } else {
        res.json({
          result: { message: "category deleted successfully" },
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
  if ( objectId.isValid(v_id) == false ) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
  Category.findOneAndUpdate({ _id: v_id }, { $set: req.body })
    .then((data) => {
      if (data == null) {
        res.json({
          error: { code: -4, message: "failed to update category" },
        });
      } else {
        res.json({
          result: { message: "category updated successfully" },
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
