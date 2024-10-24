const ingredientService=require("../service/ingredientService");


module.exports={
    createIngredientCategory:async (req,res)=>{
        try{
            const {name,restaurant}=req.body;
            const items=await ingredientService.createIngredientCategory(name,restaurant);
            res.status(200).json(items);
        }catch(error){
            res.status(500).json({error:" Internal server error",message:error.message});
        }
    },


    createIngredient:async(req,res)=>{
        try{
            const {restauranId,name,ingredientCategoryId}=req.body;
            const item= await ingredientService.createIngradientsItem(restauranId,
                name,
                ingredientCategoryId
            );
            return res.status(200).json(item);
        }catch(error){
            res.status(500).json({eroor:true,message:eroor.message});

        }
    },

    updateStoke:async(req,res)=>{
        try{
            const {id}=req.params;
            const item=await ingredientService.updateStoke(id);
            res.status(200).json(item);
        }catch(error){
            res.status(500).json({error:"Ingredients server error"});
        }
    },

    restaurantsIngredient:async(req,res)=>{
        
        try{
             const {id}=req.params;
             const item=await ingredientService.findRestaurnatIngredients(id);
             res.status(200).json(item);
        }catch(error){
            res.status(500).json({error:"Internal server error"});
        }
    },

    restaurantIngredientCategory:async(req,res)=>{
        try{
            const {id}=req.params;
            const items= await ingredientService.findIngredientsCategoryByRestaurantId(id);
            res.status(200).json(items);
        }catch(error){
            res.status(500).json({error:"Internal server error"});
        }
    }



};