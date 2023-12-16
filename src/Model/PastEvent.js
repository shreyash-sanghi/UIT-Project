const mongoose = require('mongoose');
// const validator = require('validator');

const PastEvent = new mongoose.Schema({
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
        required:true
    }
    ,RegLink:{
        type:String
    },
    EventBanner:{
        type:String
    },
})

const AddEvent = mongoose.model("PastData", PastEvent);
module.exports = AddEvent;