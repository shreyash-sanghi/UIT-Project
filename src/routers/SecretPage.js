const express = require('express');
const router = new express.Router();
const pro = require('../Middleware/personal.js')
const verify = require('../Middleware/TokenVerification.js');
const  AddEvent = require('../Model/event_data');
const Request = require('../Model/ReqModel');

router.get("/PersonalPage/:id",pro,async(req,res)=>{
    try {
    let d = req.user;
    const data = await AddEvent.find({ ReqEmail: d});
     res.json({data});
    res.status(201);
  }
    catch (error) {
      res.sendStatus(404);
    }
  })
  router.get("/MainDashbord/:id",verify,async(req,res)=>{
    try{
     const request = await Request.find();
     res.json({request});  
     res.status(201);
    }
    catch(error){
      res.sendStatus(404);
    }
  })  
module.exports = router;