const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connect = () => {
  mongoose.connect(
    "mongodb+srv://shruti166:pw05_166@cluster0.q022tkn.mongodb.net/mydb?retryWrites=true&w=majority"
  );
  console.log("connected to db");
};
connect();

const heroSchema = {
  name: String,
  city: String,
  power: Number,
  villian: String,
  language: String,
};

const HeroModel = mongoose.model("hero", heroSchema);

module.exports = {
  connect,
  HeroModel,
};
