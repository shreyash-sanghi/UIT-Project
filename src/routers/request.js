const express = require('express');
const router = new express.Router();
const Request = require('../Model/ReqModel');


router.post("/request",async(req,res)=>{
    try {
      const { ReqEmail,EventName,Discreption, Place, EDate, Time,Name,MobileNumber,RegLink, EventBanner} = req.body;
       await Request.create({
        ReqEmail,EventName,Discreption, Place, EDate, Time,Name,MobileNumber,RegLink, EventBanner
         })
         res.sendStatus(202);
    } catch (error) {
       res.sendStatus(400);
    }
  })

  router.delete('/Request/:id',async(req,res)=>{
    try {
      const _id = req.params.id;
      await Request.findByIdAndDelete(_id);
      res.sendStatus(202);
    } catch (error) {
      res.sendStatus(404);
    }
  })  

 

module.exports = router;