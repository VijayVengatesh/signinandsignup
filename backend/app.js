const express=require('express')
const mongoDbConnection = require('./dbconnection')
const router = require('./routes/userroutes')
const app=express()
const cors=require('cors')
const verifyToken = require('./middleware/verifytoken')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const PORT=process.env.PORT||5000

//database
mongoDbConnection


app.use(cors())
//router
app.use(router)


app.get("/index",verifyToken,(req,res)=>{
    res.send("index page")
})


app.use(verifyToken)
app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`)
})