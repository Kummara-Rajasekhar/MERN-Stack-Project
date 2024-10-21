const mongoose= require("mongoose");
const Restaurant = require("./restaurant.model");


const IngredientItemSchema=new mongoose.Schema({
    name:String,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'IngredientCategory'

    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restaurant'
    },
    inStoke:{
        type:Boolean,
        default:true,
    }
});
const IngredientsItem=mongoose.model('IngredientsItem',IngredientItemSchema);
module.exports=IngredientsItem;
