const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/newdb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"
  );
  console.log("connected to db");
};
connect();

module.exports = { connect };
