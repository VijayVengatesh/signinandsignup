const { type } = require('@testing-library/user-event/dist/type')
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,requried:true}
})

const userDetails=mongoose.model("userdetail",userSchema)

module.exports=userDetails