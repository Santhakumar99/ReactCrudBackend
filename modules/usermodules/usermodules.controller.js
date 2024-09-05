const mongoose = require("mongoose");
const config = require("config");


const UserModules = new mongoose.Schema({

    modulenames:{type:String ,maxlength :30}
    
})