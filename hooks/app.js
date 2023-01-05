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
        required: true,
        validate: function(){
            return emailValidator.validate(this.email);
        }
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: function(){
            return this.confirmPassword == this.password;
        }

    }
});

//model

const userModel = mongoose.model('userModel', userSchema);


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
//HOOKS TO CHECK WETHER PASSWORD NAD CONFIRM PASSWORD ARE SAME OR NOT


userSchema.pre('save', function(){
    console.log("before saving in db", this)
})

userSchema.post('save', function(doc){
    console.log("after saving in db", doc)
})



app.listen(3007);