const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.maindatafolder}`)
.then(()=>{console.log(" Data-Base connection sucessfully....")})
.catch((e)=>{console.log(e)})