const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ServiceProviderSchema = new schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    phone_number: { type: Number },
    email: { type: String },
    service: { type: String}
  },
  { versionKey: false }
);

module.exports = ServiceProvider = mongoose.model("ServiceProvider", ServiceProviderSchema);