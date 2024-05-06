const mongoose=require('mongoose')

const mongodburl="mongodb://localhost:27017/siginsignup"

const mongoDbConnection=mongoose.connect(mongodburl).then(()=>{
    console.log("connected mongodb database...")
}).catch(err=>{
    console.log("db connection error",err)
})

module.exports=mongoDbConnection