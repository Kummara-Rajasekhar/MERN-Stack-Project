const express=require("express");
const router=express.Router();
const ingredientsController=require("../controllers/ingredientsController");
const authenticate = require("../middleware/authenticate");


router.post("/category",authenticate,ingredientsController.createIngredientCategory);
router.post("",authenticate,ingredientsController.createIngredient);
router.put("/:id/stoke",authenticate,ingredientsController.updateStoke);
router.get("/restaurant/:id",authenticate,ingredientsController.restaurantsIngredient);
router.post("/restaurant/:id/category",authenticate,ingredientsController.restaurantIngredientCategory);

module.exports=router;