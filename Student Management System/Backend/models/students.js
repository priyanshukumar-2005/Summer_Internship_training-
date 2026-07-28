const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    city:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    Course:{
        type:String,
        required:true
    }

    
});


module.exports = mongoose.model("Student", studentSchema);