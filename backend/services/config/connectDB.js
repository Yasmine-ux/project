const mongoose = require("mongoose");
// const config = require("config");

const connectDB = () => {
//   mongoose
//     .connect(config.get("MONGOURI"), {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     })
mongoose.connect('mongodb://localhost:27017/homies', 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log("erreur"));
};

module.exports = connectDB;