const express = require('express');
const router = new express.Router();
const Request = require('../Model/ReqModel');
const multer = require('multer');
const path = require("path");


const images = path.join(__dirname, "../../public/Images");
console.log(images);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, images)
  }
  ,
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const uplode = multer({ storage })

router.post("/request", uplode.single('file'), async (req, res) => {

  try {
    const { ReqEmail, EventName, Discreption, Place, EDate, Time, Name, MobileNumber, RegLink } = req.body;
    await Request.create({
      ReqEmail, EventName, Discreption, Place, EDate, Time, Name, MobileNumber, RegLink,
      image:req.file.filename,
    })
    res.sendStatus(202);
  } catch (error) {
    console.log(error)
    res.status(400).send({ error });
  }
})

router.delete('/Request/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    await Request.findByIdAndDelete(_id);
    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(404);
  }
})



module.exports = router;