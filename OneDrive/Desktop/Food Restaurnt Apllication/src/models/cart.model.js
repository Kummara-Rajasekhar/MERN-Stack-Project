const mongoose= require("mongoose");

const CartScheme= new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        
    },
    items:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cartItem',
    }],
    total:Number,
});