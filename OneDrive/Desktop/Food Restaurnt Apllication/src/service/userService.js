const User = require("../models/user.model");
const bcrypt=require("bcrypt");
const { use } = require("../routes/homeRoutes");
const e = require("express");
const { getUserIdFromTken } = require("../config/jwtProvider");
module.exports={
    async createUser(userData){
        try{
            let{ fullName,emailValue,password,role}=userData;
            const isUserExsit=await User.findOne({email:emailValue})
            if(isUserExsit){
                throw new Error("User already exists with email");
            }
            password=await bcrypt.hash(password,8)

             const user =await User.create({
                fullName,
                email:emailValue,
                password:password,
                role
             });

             return user;
        }catch(error)
        {
            throw new Error(error.message);

        }
  
    },

    async getUserByEmail(email){
         try{
            const user= await User.findOne({email:email});
            if(!user){
                throw new Error("User not found");
            }
            return user;
         }catch(error){
            throw new Error(error.message);
         }

    },
      

    async findUserById(userId){
        try{
            const user= await User.findById(userId).populate("address");
            if(!user){
                throw new Error("User Not Found with id - ",userId );
            }
            return user;
        }catch(error){
             throw new Error(error.message);
        }
    },

    async findUserProfileByJwt(jwt){
        try{
            const userId=getUserIdFromTken(jwt);
            const user=await this.findUserById(userId);
            return user;
            
        }
        catch(error){
            throw new Error(error.message);
        }
    },
    


    async findAllUsers(){
        try{
            const users=await User.find();
            return users;
        }catch(error){
            throw new Error(error.message);
        }

    },

};