const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const ServiceSchema = new schema(
  {
    title: { type: String },
    category: { type: String },
    description: { type: String },
    id_serviceProvider: { type: objectId },
    id_client: { type: objectId }
  },
  { versionKey: false }
);

module.exports = Service = mongoose.model("Service", ServiceSchema);