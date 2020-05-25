const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ServiceProviderSchema = new schema(
  {
    username: { type: String, required: true, unique:true},
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: Number, required: true, unique:true },
    email: { type: String, required: true, unique:true },
  },
  { versionKey: false }
);

module.exports = ServiceProvider = mongoose.model(
  "ServiceProvider",
  ServiceProviderSchema
);
