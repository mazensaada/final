const express=require("express");
const router=express.Router();
const User=require("../models/User")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const{loginRules,registerRules,validation}=require("../middleware/validator")
const isAuth=require("../middleware/passport")
//register

router.post("/register",registerRules(),validation,async(req,res)=>{
    const{name,lastName,email,password}=req.body;
    try{
        const newUser=new User({name,lastName,email,password})
       //chek if the email exist
       const searchedUser=await User.findOne({email})
       if(searchedUser){
        return res.status(400).send("user already exist")
       }




       //hashpassword
        const salt=10;
        const genSalt=await bcrypt.genSalt(salt);
        const hashedPassword= await bcrypt.hash(password,genSalt);
        console.log(hashedPassword);
        newUser.password=hashedPassword
         //generate a token
         
        

        // save the user
        const newUserToken=await newUser.save();
        const payload={
            _id:newUserToken._id,
            name:newUserToken.name,

        };
        const token= await jwt.sign(payload,process.env.SecretOrKey,{
            expiresIn:3600,
        });
         
     res.status(200).send({ newUserToken,msg:"user is saved",token});
    }catch(error){
        res.status(500).send(console.log(error));
    }
});
//login



router.post("/login",loginRules(),validation,async(req,res)=>{
    const{email,password}=req.body;
    try{
        //find if the user exist
        const searchedUser= await User.findOne({email});
        //if the email not exist
        if(!searchedUser){
            return res.status(400).send({msg:"email invalid"});

        }
        //password are equals
        console.log(password)
        console.log(searchedUser.password)
        const match= await bcrypt.compare(password,searchedUser.password); 
        if(!match){
            return res.status(400).send({msg:"password incorrect"})
        }
        //cree un token
        const payload={
            _id:searchedUser._id,
            name:searchedUser.name,
        };
      const token=await jwt.sign(payload,process.env.SecretOrKey,{
        expiresIn:3600,
      }); 
      console.log(token); 
        //send the user
     res.status(200).send({user:searchedUser,msg:"success",token:`bearer ${token}`});
    }catch(error){
        console.log(error)
        // res.status(500).send({msg:"can not get the user"})
    }
});






router.get("/current",isAuth(),(req,res)=>{
    res.status(200).send({user:req.user})
})
module.exports=router;