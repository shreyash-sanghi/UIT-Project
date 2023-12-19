const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Register = new mongoose.Schema({
      GroupName:{
        type:String,
        required:true
      },
      Fname:{
        type:String,
        required:true,
        trim:true,
        minlength :[2,"Name are greater then 2 word"]
       },
       CurrentLeader:{
           type:String,
           required:true,
           trim:true,
       },
       Email:{
       type:String,
       required:true,
       unique:true,
       validate(value){
        if(!validator.isEmail(value)){
           throw new Error("Email is invalid")
        }
       }
       },
       MobileNumber:{
           type:Number,
           required:true,
           minlength:[10]
       },
       Password:{
        type:String,
        required:true,
       //  validate(value){
       //     if(!validator.isStrongPassword(value)){
       //         throw new Error("Its not a strong password")
       //     }
       //  }
       },
       Cpassword:{
           type:String,
           required:true,
       },
       tokens:[{
        token:{
         type:String,
         require:true
        }
     }]
})


   //gernate tokens
   Register.methods.generateAuthToken = async function(){
    try {
        const Token = jwt.sign({_id:this._id},process.env.Sectet_Key1);
        this.tokens = this.tokens.concat({token:Token})
        return Token;
    } catch (error) {
      console.log(error);
    }
}
Register.methods.LoginToken = async function(){
    try {
        const Token = jwt.sign({_id:this._id},process.env.Sectet_Key1);
        this.tokens = this.tokens.concat({token:Token})
        await this.save();
        return Token;
    } catch (error) {
       console.log(error);
    }
}

//bscript password
Register.pre("save",async function(next){
    if(this.isModified("Password")){
    this.Password = await bcrypt.hash(this.Password,10);
    this.Cpassword = await bcrypt.hash(this.Cpassword,10);
    }
    next();
})


const RegisterData = new mongoose.model("RegisterData",Register);
module.exports = RegisterData;


// const Person = mongoose.model('Person', personSchema,"" );