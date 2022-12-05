const mongooose = require('mongoose');
const writterSchema = new mongooose.Schema({
    name:{
       type:String,
       required:true,
       unique:true  
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    ContentType:{
        type:String,
        required:true,
    },
    followers:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
})
const User = mongooose.model('User',writterSchema);
module.exports = User;