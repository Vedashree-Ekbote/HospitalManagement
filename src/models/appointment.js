//appointment schema

const mongoose = require('mongoose');
const validator= require('validator');

const appointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mno:{
        type:Number,
        required:true
    },    
    dept:{
        type:String,
        required:true
    },
    email:{
            type:String,
            required:true
        },
    address:{
            type:String,
            required:true
    },
    time:{
        type:String,
        required: true,
       }

});
mongoose.model("Appointment",appointmentSchema);