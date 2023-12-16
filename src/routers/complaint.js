const express = require('express');
const router = new express.Router();
const verify = require('../Middleware/TokenVerification.js');
const StuComplaint = require('../Model/StuComplaint.js');


router.post("/Complaint",async (req,res)=>{
    try {
      const {Name,CompEmail,MobileNumber,Year,Branch,College,ComAbout,ComDiscribe,Suggestion,PostDate} = req.body;
        await StuComplaint.create({
        Name,CompEmail,MobileNumber,Year,Branch,College,ComAbout,ComDiscribe,Suggestion,PostDate
       })
       res.sendStatus(201);
    } catch (error) {
      res.sendStatus(404);
    }
  })
  
  router.get("/Complaint/:id",verify,async(req,res)=>{
    try {
      const data = await StuComplaint.find();
      res.json({data:data});
      res.status(202);
    } catch (error) {
      res.sendStatus(404);
    }
  })
  
  router.delete('/Complaint/:id',async(req,res)=>{
    try {
      const _id = req.params.id;
      await StuComplaint.findByIdAndDelete(_id);
      res.sendStatus(202);
    } catch (error) {
      res.sendStatus(404);
    }
  })
  
module.exports = router;