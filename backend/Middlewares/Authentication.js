const jwt=require('jsonwebtoken')
require('dotenv').config();
const Authentication=async(req, res, next) => {
  console.log("req",req);
  console.log("token1");
      const token = req.headers.authorization;
      console.log("token",token);
      if(token){
        const decodedToken = jwt.verify(token,"Secret");
        if(decodedToken){
          req.body.UserId=decodedToken.userId;
          req.body.role=decodedToken.role
          next()
        }else{
          return res.status(404).send({"msg":"You are not authorized"})
        }
      }else{
        return res.status(401).send({"msg":"token must be needed for generating tickets... go for login or signup"})
      }
   
  };
  
  module.exports ={Authentication};