const express=require('express')
const { createUser, checkUser } = require('../controller/userdetailscontroller')
const verifyToken = require('../middleware/verifytoken')
const router=express.Router()

router.post("/signup",createUser)

router.post("/signin",checkUser)

module.exports=router