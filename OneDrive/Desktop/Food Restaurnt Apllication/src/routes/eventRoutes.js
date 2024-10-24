const express=require("express");
const router=express.Router();
const eventController=require("../controllers/eventController");
const { route } = require("./homeRoutes");
const authenticate = require("../middleware/authenticate");

router.get("/events",eventController.findAllEvents);

module.exports=route;