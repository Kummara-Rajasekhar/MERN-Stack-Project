const { Router } = require("express");
const router=Router();


router.get("",async(req,res)=>{
    res.status(200).send({message:"Wecome to Online Food  Website"})
})

module.exports=router;