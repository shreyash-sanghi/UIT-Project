const mongoose = require('mongoose');
const validator = require('validator');


const Register = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true,
        validate(value){
        if(!validator.isEmail(value)){
           throw new Error("Email is invalid")
        }
       }
  },
  MobileNumber: {
    type:String,
    required: true,
    trim:true,
    minlength: [10]
  },
  Year: {
    type: String,
    required: true
  },
  Branch: {
    type: String,
    required: true
  },
  StuPassword: {
    type: String,
    required: true
  },
  College: {
    type: String,
    required: true
  },
  Interest: {
    type: String,
    required: true
  },

})

const StuRegData = new mongoose.model("StuRegData", Register);
module.exports = StuRegData;