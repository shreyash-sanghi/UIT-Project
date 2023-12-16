const jwt = require("jsonwebtoken");
const Register = require("../Model/RegModel");



const verify = async (req,res,next)=>{
    try {
        const token = req.header('Authorization')
        const varifyUser = jwt.verify(token,process.env.Sectet_Key1);
        next();
    } catch (error) {
        res.sendStatus(401);
    }
}
module.exports = verify;