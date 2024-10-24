
const foodServicee= require("../service/foodService");
const RestaurantService = require("../service/RestaurantService");
const userService = require("../service/userService");
 module.exports={


    searchFood:async (req,res)=>{
        try{
            const {name}=req.query;
            const menuItem=await foodServicee.searchFood(name);
            res.status(200).json(menuItem); 
        }catch(error){
            throw new Error( { error: "Internal server error"});
        }
    },
     getMenuItemByRestaurantId: async(req,res)=>{
        try{
              const { restaurantId}=req.param;
              const { vegetarian, seasonal , nonveg, food_category}=req.query;
              const menuItems= await foodServicee.getRestaurantsFood(
                restaurantId,
                vegetarian,
                nonveg,
                seasonal,
                food_category
            
              );
              res.status(200).json(menuItems);
        }catch(error){
            if(error instanceof Error){
                res.status(400).json({error:error.message});
            }
            else{
                res.status(500).json({error:"Internal server error"});
            }
            
        }
     },
     async createItem(req,res){
        try{
              const item=req.body;
              const user=req.user;
              const restaurant =await RestaurantService.findRestaurantById(item.restaurantId);
              const menuItem =await foodServicee.createFood(item,restaurant);
              res.status(200).json(menuItem);
        }catch(error){
            if(error instanceof Error){
                res.status(400).json({error:error.message});
            }
            else{
                res.status(500).json({error:"Internal server error"});

            }
        }
     },

     async deleteItem(req,res){
        try{
              const {id}=req.params;
              const user=await userService.findUserProfileByJwt(jwt);
              await foodServicee.deleteFood(id);
              res.status(200).json({message :" Menu item deleted"});
        }catch(error){
            if(error instanceof Error){
                res.status(400).json({error:error.message});
            }
            else{
                res.status(500).json({error:"Internal server error"});

            }
        }
     },


     async updateAvailabilityStatus(req,res){
        try{
              const {id}=req.params;
              const memuItem =await foodServicee.upsateAvailabilityStatus(id);

              res.status(200).json(memuItem);
        }catch(error){
            if(error instanceof Error){
                res.status(400).json({error:error.message});
            }
            else{
                res.status(500).json({error:"Internal server error"});

            }
        }
     },

 }