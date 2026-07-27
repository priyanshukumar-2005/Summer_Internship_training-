const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


//Mongoose  connection with MongoDB

mongoose.connect("mongodb://127.0.0.1:27017/productDB").then(
    ()=>{console.log("DB connected successfully ...")}
).catch(
    (err)=>{console.log(err)}
)


//Product routes
const productroutes = require("./Routes/productroutes");
app.use("/products",productroutes);



//Server listen

app.listen(4000, ()=>{
    console.log("Server is working fine at  http://localhost:4000")
})