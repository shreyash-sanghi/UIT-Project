const express = require('express');
const router = new express.Router();
const verify = require('../Middleware/TokenVerification.js');
const pro = require('../Middleware/personal.js')
const Register = require('../Model/RegModel');
const  StuRegister = require('../Model/StuRegModel');


router.get("/registration/:id",verify, async(req,res)=>{
    try {
     res.sendStatus(201);
    } catch (error) {
       res.status(404).send(error);
    }
  })
  router.post("/registration/:id",verify, async(req,res)=>{
    try {
      const {Password,Cpassword,GroupName,Fname, CurrentLeader, Email,MobileNumber} = req.body;
      if(Password === Cpassword){
       await Register.create({
          Password,Cpassword,GroupName,Fname, CurrentLeader, Email,MobileNumber
         })
         res.sendStatus(201);
      }
      else{
      res.status(404).send("Both Password are diffrent write correct password....")
      }
    } catch (error) {
       res.status(404);
       res.send(error)
    }
  })
  
  //***************----------------------------*********************** */
  //Student Registration
  router.post("/Sregister",async(req,res)=>{
    try {
      const {Name,Email,MobileNumber,Year,Branch,StuPassword,College,Interest} = req.body;
      await StuRegister.create({
      Name,Email,MobileNumber,Year,Branch,StuPassword,College,Interest
       })
       res.sendStatus(201);
    } catch (error) {
      res.sendStatus(404);
    }
  })

  //Total Student
router.get("/StudentDashbord/:id",verify,async(req,res)=>{
    try {
      const data = await StuRegister.find();
      res.json({data});
      res.status(201);
    } catch (error) {
      res.sendStatus(404);
    }
  })
  //Delete Student Id
  router.delete("/StudentDashbord/:id",async(req,res)=>{
    try {
      const _id = req.params.id;
      const de =  await StuRegister.findByIdAndDelete(_id);
      res.sendStatus(202);
    } 
    catch (error) {
      res.sendStatus(404);
    }
  })

//Total Club Register
router.get("/Dashbord/:id",verify,async(req,res)=>{
    try{
    const data = await Register.find();
     res.json({data});
     res.status(201);
    }
    catch(error){
      res.sendStatus(404);
    }
  })
  
  //Delete Register Club
  router.delete("/Dashbord/:id",async(req,res)=>{
    try {
      const _id = req.params.id;
      const de =  await Register.findByIdAndDelete(_id);
      res.sendStatus(202);
    } 
    catch (error) {
      res.sendStatus(404);
    }
  
  })
  

module.exports = router;