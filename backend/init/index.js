const menu= require('./data.js');
const mongoose = require('mongoose');
const FoodItem= require('../models/foodItems.js');
const FoodCategory= require('../models/foodCategory.js');
require('dotenv').config();
const dbUrl= process.env.ATLAS_URL;
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(dbUrl); // Here dbUrl will not be called because .env is not this file so get the exact url whenever trying to initialize data for first time
}

async function initDb(){
  await FoodItem.deleteMany({});
   const obj= await FoodItem.insertMany(menu).then(()=>{
    console.log('data inserted');
   }).catch((err)=>{
    console.log(err);
   });
};
// initDb();
async function initDbCategory(){
  await FoodCategory.deleteMany({});
  const item1= new FoodCategory({
    CategoryName:'Pizza'
  });
  const item2= new FoodCategory({
    CategoryName:'Starter'
  });
  const item3= new FoodCategory({
    CategoryName:'Biryani/Rice'
  });
  const items=[item1, item2, item3];
  await FoodCategory.insertMany(items).then(()=>{
    console.log('Data is inserted in category');
  }).catch((err)=>{
    console.log(err);
  });
};
// initDbCategory();