const {app} =require(".");
const connectDB = require("./config/db");


const Port=5454;
 app.listen(Port,async()=>{
    await connectDB()
    console.log("Server is running on port 5454");
 })