const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const ServiceSchema = new schema(
  {
    title: { type: String },
    description: { type: String },
    status: { type: Boolean },
    id_category: { type: objectId, ref: "Category" },
    id_serviceProvider: { type: objectId, ref: "ServiceProvider" },
    id_client: { type: objectId, ref:"Client" },
  },
  { versionKey: false }
);

module.exports = {
  ServiceProviderCollection: require("./serviceProvider_models"),
  clientCollection: require("./clients_models"),
  categoriesCollection: require("./categories_models"),
  ServiceCollection: mongoose.model("Service", ServiceSchema),
};
