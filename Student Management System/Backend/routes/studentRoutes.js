const express = require("express");
const Students = require("../models/students");
const students = require("../models/students");
const Router = express.Router();


//1 Create new student
Router.post("/",async(req,res)=>{
    try{
        const Students = await Students.create(req,body);
    res.status(201).json({
        msg : "Student created successfully ...",
        students
    })
    }catch(error){
        res.status(500).json({
            msg : error
        })
    }
})


//2 View all students
Router.get("/",async(req,res)=>{
    try{
        const students = await Students.find();
        
        res.status(201).json(students);

    }catch(error){
        res.status(501).json({
            msg : error
        })

    }
})


//3 View students with ID
Router.get("/:id",async(req,res)=>{
    try{
        const students = await Students.findById(req.params.id);

        if(!students){
            res.status(404).json({
                msg : "Student not found ..."
            })
        }
        res.status(200).json(students);

    }catch(error){
        res.status(501).json({
            msg : "Improper id ..."
        })

    }
})


module.exports = Router;