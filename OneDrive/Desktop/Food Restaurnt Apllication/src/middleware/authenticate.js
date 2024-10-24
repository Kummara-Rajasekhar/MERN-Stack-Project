const { getUserIdFromTken } = require("../config/jwtProvider");
const userService = require("../service/userService");

const authenticate=async(req,res,next)=>{
    try{
            const token=req.headers.authorization?.splite(" ")[1];  

            if(!token){
                return res.status(401).json({message:"No token provideed"});

            }
            const userId=getUserIdFromTken(token);
            const user=userService.findUserById(userId);
            req.user=user;

    }catch(error){
        res.send({error:error.message});
    }
    next();


}
module.exports=authenticate;