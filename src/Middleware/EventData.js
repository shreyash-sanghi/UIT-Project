const jwt = require("jsonwebtoken");
const Register = require("../Model/RegModel");



const addData = async (req,res,next)=>{
    try {
        const token = req.header('Authorization');
        const varifyUser = jwt.verify(token,process.env.Sectet_Key1);
        const user = await Register.findOne({_id:varifyUser._id})
        req.user = user.Email;
        req.password = user.Password;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send("error"+error);
    }
}
module.exports = addData;