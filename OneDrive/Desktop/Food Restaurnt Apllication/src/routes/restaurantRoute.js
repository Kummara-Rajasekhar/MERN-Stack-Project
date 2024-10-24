const express=require("express");
const router=express.Router();
const restaurantController=require("../controllers/restaurnatController");
const authenticate = require("../middleware/authenticate");



router.get("/search",restaurantController.findRestaurantByName);
router.get("/",restaurantController.getAllRestaurants);
router.get("/:id",restaurantController.findRestaurantById);
router.get("/:id/add-favorites",authenticate,restaurantController.addToFavourite);

module.exports=router;