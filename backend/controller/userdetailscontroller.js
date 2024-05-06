const userDetails = require("../models/userdetails");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.createUser = async (req, res) => {
  console.log("signup router called");
  console.log(req.body);
  try {
    //hash password
    const hashPassword=await bcrypt.hash(req.body.password,10)
    const user = new userDetails({username:req.body.username,password:hashPassword});
    await user.save();
    res.json(user).status(200);
  } catch (error) {
    console.log(error)
    res.status(500).json({message:'internal server error'})
  }
};

exports.checkUser = async (req, res) => {
  console.log("signin router called");
 try {
    console.log(req.body.username)
    const user = await userDetails.findOne({ username: req.body.username });
    if (!user) {
      res.status(200).json({ message: "user not found",loginStatus:false });
    }
    else{
      const passwordMatch=bcrypt.compare(req.body.password,user.password)
      if(!passwordMatch) console.log("user authendication failed")
      const token=jwt.sign({userId:user._id},'login-secret-key')
      res.status(200).json({message:"login successfully",loginStatus:true,token:token})
    }
 } catch (error) {
    console.log(error)
    res.status(500).json({message:"internal server error"})
 }
};
