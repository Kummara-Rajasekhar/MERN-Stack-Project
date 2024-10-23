const { syncIndexes } = require("../models/user.model");
const { use } = require("../routes/homeRoutes");
const restaurantService = require("../service/RestaurantService");
const { createRestaurant } = require("../service/RestaurantService");
const userService = require("../service/userService");

module.exports={
    createRestaurant:async(req,res)=>{
        try{
              const user=req.user;
              const restaurant= await restaurantService.createRestaurant(req.body,user);
        }catch(error){
            res.status(400).send({errr:error.message});

        }
    },
     deleteRestaurant: async(req,res)=>{
        try{
              const {id}= req.params;
              /* const {jwt}=req.body; */
              const user=req.user;
              await restaurantService.deleteRestaurant(id);
              res.status(200).json({
                message:"Restaurant Deleted with id Successfully",
                success:true
              })
        }catch(error){
            if(error instanceof Error){
                res.status(400).json({error:error.message});
            }
            else{

            }
        }
     },
     updateRestaurantStatus:async(req,res)=>{
        try{
              const {id}=req.params;
              console.log("restaurant id",id);
              const restaurant=await restaurantService.updateRestaurantStatus(id.toString());
              res.status(200).json(restaurant);
        }catch(error){
            throw new Error(error.message);
        }    
    },
    findRestaurantByUserId:async(req,rs)=>{
        try{
              const user=req.user;
              const restaurant=await restaurantService.getRestaurantByUserId(user._id);
              res.status(200).json(restaurant);
        }catch(error){
            if(error instanceof Error){
                res.status(400).json({error:error.message});
            }
            else{
                res.status(500).json({error:"Internal server error"});
            }
        }
    },
    findRestaurantByName:async(req,res)=>{
        try{
              const {keyword}=req.query;
              const restaurants=await restaurantService.searchRestaurant(keyword);
              res.status(200).json(restaurants);
        }catch(error){
            res.status(500).json({error:"Internal server error"});

        }
    },
    getAllRestaurants:async(req,res)=>{
        try{
              const restaurants= await restaurantService.getAllRestaurants();
              res.status(200).json(restaurants);
        }catch(error){
            res.status(500).json({error:"Internal server error"});

        }
    },
    findRestaurantById:async(req,res)=>{
        try{
              const {id}= req.params;
              const restaurant=await restaurantService.findRestaurantById(id);
              res.status(200).json(restaurant);
        }catch(error){
            if(error instanceof Error){
                res.status(400).json({error:error.message});
            }
            else{
                res.status(500).json({error:"Internal server error"});

            }
        }
    },
    addToFavourite:async(req,res)=>{
        try{
              const {id}=req.params;
              const user= await userService.findUserProfileByJwt(jwt);
              const restaurant =await restaurantService.addToFavourite(id,user);
              res.status(200).json(restaurant);
        }catch(error){
            if(error instanceof Error){
                res.status(400).json({error:error.message});
            }
            else{
                res.status(500).json({error:"Internal server error"});

            }
        }
    }

}