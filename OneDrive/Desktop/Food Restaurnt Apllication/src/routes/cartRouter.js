const express=require("express");
const router=express.Router();
const cartController=require("../controllers/cartController");
const { route } = require("./homeRoutes");
const authenticate = require("../middleware/authenticate");


router.put("/add",authenticate,cartController.addItemToCart);
/* router.get("/total",authenticate,cartController.calculateCartTotal);
 */router.get("",authenticate,cartController.findUserCart);
router.put("/clear",authenticate,cartController.clearCart);


module.exports=router;