const { generateToken } = require("../config/jwtProvider");
const userService = require("../service/userService")
const bcrypt= require('bcrypt');
const register=async(req,res)=>{
    try{
        const user= await userService.createUser(req,body);
        const jwt=generateToken(user._id);
        

        return res.status(201).send({jwt,message:"register success"})
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}


const login=async (req,res)=>{
const {password,email}=req.body;
try{
    const user= await userService.getUserByEmail(email);
    const isPasswordMatch= await bcrypt.compare(password,user.password);
    if(!isPasswordMatch){
        return res.status(401).send({message:"invalid password"});
    }

    const jwt=generateToken(user._id);
    return res.status(200).senf({jwt,message:"login successfull"})
}catch(error){
    return res.status(500).send({error:error.message});
}
}


module.exports={
    register,
    login
}