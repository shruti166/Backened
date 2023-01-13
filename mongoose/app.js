const mongoose = require('mongoose');


const connect = async() => {
    try {
        const connection = mongoose.connect("mongodb://127.0.0.1:27017/")
        console.log("connected to db");
    } catch(err) {
        console.log("cannot connect to database");
        console.log(err);
    }
}
connect();