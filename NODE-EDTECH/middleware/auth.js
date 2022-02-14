const jwt=require('jsonwebtoken');

module.exports=function(req, res, next){
//we dont know header is in json or not so simply we use []
const token=req.headers["authorization"];  

if(!token){res.status(400).send("Access denied. No token provided")}

try{
    jwt.verify(token, "myprivatekey");
    next();
}catch{
    res.status(400).send("Invalid token");
}

}