const mongoose= require('mongoose');
const {Schema}= mongoose;

const FoodItemSchema= new Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [{
        type: Object,
        required: true
    }],
    description: {
        type: String,
        required: true
    }
});
const FoodItem = mongoose.model('FoodItem', FoodItemSchema);
module.exports= FoodItem;