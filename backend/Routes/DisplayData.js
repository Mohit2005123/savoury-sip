const express = require('express');
const app = express();
const router = express.Router();
const mongoose= require('mongoose');
const FoodItem= require('../models/foodItems.js');
const FoodCategory= require('../models/foodCategory.js');
router.get('/foodData', async(req, res)=>{
    try{
        const foodData=  await FoodItem.find();
        const foodCategory= await FoodCategory.find();
        res.send([foodData, foodCategory]);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
});

module.exports= router;