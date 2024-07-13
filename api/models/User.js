const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3 ,
        max:20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50, 
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    profilePicture:{
       type:String,
       default:""
    },
    coverPicture:{
       type:String,
       default:"",
    },
    followers:{
      type:Array,
      default:[],
    },
    followins:{
        type:Array,
        default:[],
    },

},
{timestamps:true}
)
module.exports=mongoose.model("User",userSchema);