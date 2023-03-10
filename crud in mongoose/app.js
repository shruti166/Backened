const mongoose = require('mongoose');
const express = require('express');
mongoose.set('strictQuery', true);
const app = express();
app.use(express.json());


const userRouter = express.Router();


app.use("/user", getAllUsers);
app.use("/add", addUsers);


const db_link = 'mongodb+srv://shruti31:1Shruti1@cluster0.pturoip.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_link).then(function(db){
    console.log("db connected");
}).catch(function(err) {
    console.log(err);
})


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//model

const userModel = mongoose.model('userModel', userSchema);

// (async function createUser() {
//     let user = {
//         name: 'Shruti',
//         email: 'abc@gmail.com',
//         password: '123',
//         minLength:8
//     }
//     let data = await userModel.create(user);
//     console.log(data);
// })();


//CRUD OPERATIONS

//GET
async function getAllUsers(req, res) {
    let allUsers = await userModel.find();
    res.send(allUsers)
}
//POST
async function addUsers(req, res) {
    let data = req.body;
    let user = userModel.create(data);
    res.send(data);
}
//

app.listen(3003);