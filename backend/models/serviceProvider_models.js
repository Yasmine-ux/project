const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ServiceProviderSchema = new schema(
  {
    username: { type: String },
    password: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    phone_number: { type: Number },
    email: { type: String },
  },
  { versionKey: false }
);

module.exports = ServiceProvider = mongoose.model(
  "ServiceProvider",
  ServiceProviderSchema
);
