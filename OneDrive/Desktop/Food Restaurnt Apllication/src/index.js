const express =require('express')
const  cors= require('cors')
const bodyParser= require('body-parser')
const app=express()
const { something } = require('vite/runtime');


const homeRouter= require('./routes/homeRoutes')
app.use("/",homeRouter)
app.use(cors());
app.use(bodyParser.json())

const authRoutes=require('./routes/auhtRoutes.js')
app.use("/auth",authRoutes);


const userRoutes=require("./routes/userRoutes.js");
app.use("/api/users",userRoutes);

const restaurantRoutes=require("./routes/restaurantRoute.js");
app.use("/api/restaurants",restaurantRoutes);

const orderRoutes=require("./routes/orderRoutes.js");
app.use("/api/order",orderRoutes);

const menuItemRoutes=require("./routes/menuItemRoutes.js");
app.use("/api/food",menuItemRoutes);


const adminRestaurantRoutes=require("./routes/adminResaturantRoutes.js");
app.use("/api/admin/restaurants",adminRestaurantRoutes);


const adminOrderRoutes=require("./routes/adminOrderRoutes.js");
app.use("/api/admin/order",adminOrderRoutes);

const cartRoutes=require("./routes/cartRouter.js");
app.use("/api/cart",cartRoutes);

const cartItemRoutes=require("./routes/cartItemRoutes.js");
app.use("/api/cart-item",cartItemRoutes);


const categoryRoutes=require("./routes/categoryRoutes.js");
app.use("/api/category",cartItemRoutes);

const adminCategoryRoutes=require("./routes/adminCategoryRoutes.js");
app.use("/api/admin/category",adminCategoryRoutes);

const adminIngredientsRoutes=require("./routes/adminIngredientsRoutes.js");
app.use("/api/admin/ingredients",adminCategoryRoutes);

const eventRoutes=require("./routes/eventRoutes.js");
app.use("/api/events",eventRoutes);

const adminEventsRoutes=require("./routes/adminEventRoutes.js");
app.use("/api/admin/events",adminEventsRoutes);



module.exports={app}
