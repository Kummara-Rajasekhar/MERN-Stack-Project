const express=require("express");
const router=express.Router();
const OrderController=require("../controllers/orderController");
const authenticate = require("../middleware/authenticate");
const orderController = require("../controllers/orderController");


router.delete("/:orderId",authenticate,orderController.deleteOrder);
router.get("/restaurant/:restaurantId",authenticate,orderController.getAllRestaurantOrders);
router.put("/:orderId/:orderStatus",authenticate,orderController.updateOrder)
 
module.exports=router;