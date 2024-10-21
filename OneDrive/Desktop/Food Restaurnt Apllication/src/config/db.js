
const mongoose = require("mongoose")
const mongodburl="mongodb+srv://kummararajasekhar17092004:1hV2wKe7sqVW5ybO@food-restaurant-applica.a1yxa.mongodb.net/?retryWrites=true&w=majority&appName=Food-Restaurant-Application"


async function connectDB() {
    return mongoose.connect(mongodburl)
    
}
module.exports=connectDB