const mongoose = require('mongoose');
const validator = require('validator');

const Event = new mongoose.Schema({
    EventName: {
        type: String,
        required: true
    },
    Discreption: {
        type: String,
        required: true
    },
    Place: {
        type: String,
        required: true
    },
    EDate: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required:true,
        
    }
    ,image:{
        type:String
    }
    ,RegLink:{
        type:String
    },
     ReqEmail: {
        type: String,
        required: true,
          validate(value){
        if(!validator.isEmail(value)){
           throw new Error("Email is invalid")
        }
       }
    },
})


const AddEvent = mongoose.model("Edata", Event);
module.exports = AddEvent;