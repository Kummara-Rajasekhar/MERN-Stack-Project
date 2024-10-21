const mongoose= require("mongoose");
const { ModuleCacheMap } = require("vite/runtime");


const CartItemSchema=new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cart',
    },
    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Food',
    },
    quantity:Number,
    ingredients:[String],
    totalPrice:Number,
})
const CartItem=mongoose.model('CartItem',CartItemSchema);
module.exports=CartItem;