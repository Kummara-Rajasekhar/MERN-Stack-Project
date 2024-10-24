const express=require("express");
const router=express.Router();
const foodController=require("../controllers/foodController");


router.get("/serch",foodController.searchFood);
router.get("/restaurant/:restaurantId",foodController.getMenuItemByRestaurantId);


module.exports=router;