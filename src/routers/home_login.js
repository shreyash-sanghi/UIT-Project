const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Register = require('../Model/RegModel');

router.get("/:token",async(req,res,next)=>{
    try {
       const token = req.params.token;
       const varifyUser = jwt.verify(token,process.env.Sectet_Key1);
       const user = await Register.findOne({_id:varifyUser._id})
        res.json({id:user._id,Email:user.Email}).status(202);   
    } catch (error) {
      res.status(404);
    }
})

//Club Login
router.post("/login",async(req,res)=>{
  try {
  
  const {Email,Password} = req.body; 
  const userEmail = await Register.findOne({ Email: Email });
  const isMatch = await bcrypt.compare(Password, userEmail.Password); 
  if(isMatch === true){
    if (isMatch) {
      for(let i=0; i<userEmail.tokens.length;i++){
          userEmail.tokens.shift();
      }
      const token = await userEmail.LoginToken();
      res.cookie("jwt",token)
      res.json({token:token,Email:userEmail.Email,id:userEmail.id,HostEmail1:process.env.HostEmail1}).status(202);
    }
  }else{
    res.sendStatus(404);
  } 
} catch (error) {
  res.sendStatus(404)
}
})


module.exports = router;