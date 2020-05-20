const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ClientSchema = new schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    phone_number: { type: Number },
    adress: { type: String },
    email: { type: String }
  },
  { versionKey: false }
);

module.exports = Client = mongoose.model("Client", ClientSchema);