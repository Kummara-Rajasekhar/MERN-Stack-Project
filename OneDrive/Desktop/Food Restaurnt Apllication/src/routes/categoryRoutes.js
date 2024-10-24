const express=require("express");
const router=express.Router();
const categoryController=require("../controllers/categoryController");
const { route } = require("./homeRoutes");
const authenticate = require("../middleware/authenticate");

router.get("/restaurant/:id",authenticate,categoryController.getRestauratCategory);
module.exports=router;