const express=require("express");
const router=express.Router();
const adminRestaurantController=require("../controllers/restaurnatController");
const authenticate = require("../middleware/authenticate");
router.post("/",authenticate,adminRestaurantController.createRestaurant)
router.delete("/:id",authenticate,adminRestaurantController.deleteRestaurantById)
router.put("/:id/status",authenticate,adminRestaurantController.updateRestaurantStatus)
router.get("/user",authenticate,adminRestaurantController.findRestaurantById)


module.exports=router;