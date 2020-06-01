const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
 const GPU = require('../models/GraphicCard');
router.get("/",(req,res)=>{
    GPU.find().then(data=>res.json(data));
});
router.post("/",(req,res)=>{

    const gpu = new GPU({
        name :req.body.name,
        company:req.body.company,
        price:req.body.price,
        img:req.body.img
 
    });
    gpu.save().then(res=>console.log(res));
    res.send(gpu);
});


module.exports = router;