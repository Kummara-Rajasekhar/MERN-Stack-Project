const express=require("express");
const router=express.Router();
const categoryController= require("../controllers/categoryController");
const authenticate = require("../middleware/authenticate");
router.post("", authenticate,categoryController.createCategory);
router.get("/category/restaurant/:is",authenticate,categoryController.getRestauratCategory);
module.exports=router;