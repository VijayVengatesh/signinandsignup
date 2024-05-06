const jwt=require('jsonwebtoken')
const verifyToken=(req,res,next)=>{
    const token=req.header('Authorization')
    if(token)
    {
        const decoded=jwt.verify(token,"login-secret-key")
        console.log(decoded)
        next()
    }
    else{
       res.status(401).send("Access Denaid")
    }
}

module.exports=verifyToken