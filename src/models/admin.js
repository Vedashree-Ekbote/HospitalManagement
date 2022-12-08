const mongoose = require('mongoose');
const validator= require('validator');

const adminSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                alert("Invalid credentials");
            }
        }
    },
    password:{
        type:String,
        required:true,
    },
    drid:{
        type:String,
        required:true,
        unique:true
    }
});
mongoose.model("Admin",adminSchema);