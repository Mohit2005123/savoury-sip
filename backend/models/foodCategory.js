const mongoose= require('mongoose');
const {Schema}= mongoose;

const foodCategorySchema= new Schema({
    CategoryName: {
        type: String,
        required: true
    }
});
const FoodCategory = mongoose.model('FoodCategory', foodCategorySchema);
module.exports= FoodCategory;