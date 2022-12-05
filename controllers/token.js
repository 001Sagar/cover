const user = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports.createsession = async function(req,res){
    try {
  let user = await user.findOne({email:req.body.email});
  if(!user || user.password != req.body.password){
    return res.json(422,{
        message:"Invalid username or password"
    })
  }
  return res.json(200,{
    message:"Sign in successfully ,here is your token please take it safe",
    date:{
  token:jwt.sign(user.toJson(),'blog',{expiresIn:'10000'})
    }
  })
  
    } catch (error) {
        console.log('********',err);
            return res.json(500,{
                message:"Inter server error"
            })
        }

}