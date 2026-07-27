const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type : String,
        required : true,
        unique : true
    },
    productDescription : {
        type : String,
    },
    productPrice :{
        type : Number,
        required : true
    },
    productCategory : {
        type : String,
        required : true
    },
    productQuantity : {
        type : Number,
        required : true,
        default : 0
    },
    productInStock : {
        type : Boolean,
        required :true
    }
})

//Syntax


module.exports = mongoose.model("Product", productSchema)