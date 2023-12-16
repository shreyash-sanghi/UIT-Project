const mongoose = require('mongoose');
const validator = require('validator');


const Request = new mongoose.Schema({
  EventName: {
    type: String,
    required:true
  },
  Discreption: {
    type: String,
    required:true,
    trim: true,
  },
  Place: {
    type: String,
    required:true,
    trim: true,
  },
  ReqEmail: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid")
      }
    }
  },
  Time: {
    type: String,
    required:true,
  },

  Name: { type: String, required:true },
  MobileNumber: { type: String, required: true,minlength:[10] },
  RegLink: { type: String },
  EventBanner: { type: String },
  EDate: { type: String, required: true },

})


const RequestData = new mongoose.model("RequestData", Request);
module.exports = RequestData;