const mongoose = require('mongoose');
const validator = require('validator');


const Complaint = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  CompEmail: {
    type: String,
    required: true,
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
  ComAbout:{
    type: String,
    required: true
  },
  College: {
    type: String,
    required: true
  },
  ComDiscribe: {
    type: String,
    required: true
  },
  Suggestion:{
    type:String
  },
  PostDate:{
    type:String
  }

})

const StuComplaint = new mongoose.model("StuComplaint",Complaint);
module.exports = StuComplaint;