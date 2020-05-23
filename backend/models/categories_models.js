const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CategorySchema = new schema(
  {
    title: { type: String },
    photo_URL: { type: String}
  },
  { versionKey: false }
);

module.exports = Category = mongoose.model("Category", CategorySchema);