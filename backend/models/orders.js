const mongoose= require('mongoose');
const {Schema}= mongoose;

const OrderSchema= new Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    orderData:{
        type:Array,
        required: true
    }
});
const Order = mongoose.model('Order', OrderSchema);
module.exports= Order;