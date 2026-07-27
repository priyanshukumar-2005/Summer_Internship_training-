const express = require("express");
const Product = require("../models/product")

const Router = express.Router();

Router.post("/", async(req,res)=>{
    try{
        const product = await product.create(req.body);
        res.status(201).json(product)
    }catch(error){
        res.status(400).json({
            msg : error
        }
            
        )
    }
})

module.exports = Router;
