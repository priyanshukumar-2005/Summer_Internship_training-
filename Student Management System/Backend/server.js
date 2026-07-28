const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


//Enabling cors
app.use(cors());


//Global middleware
app.use(express.json());


//Mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/studentSystemDB").then(()=>{
    console.log("Database connected successfully ... ")}
).catch((err)=>{
    console.log(err);
});


//Routing
const studentRoutes = require("./routes/studentRoutes");
app.use("/students",studentRoutes);


//Server listener
const port = 5000
app.listen(port, ()=>{
    console.log("Server is working fine at port http://localhost:5000 ");
})