const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
const User = require("../models/User");

//update user
 router.put("/:id",async (req,res)=>{
  if(req.body.userId===req.params.id || req.body.isAdmin) {
    if(req.body.password) {
try {
  const salt=await bcrypt.genSalt(10);
   req.body.password=await bcrypt.hash(req.body.password,salt);
} catch (error) {
 return res.status(500).json(error);
} 
   }
   try {
     const user=await User.findByIdAndUpdate(req.params.id,{$set:req.body,});
     res.status(200).json("Account has been updated");
   } catch (error) {
     return res.status(200).json(error);
   }
  } 
  else {
    return res.status(403).json("You can update only your account!");
  }
 })
//delete user
router.delete("/:id",async (req,res)=>{
  if(req.body.userId===req.params.id || req.body.isAdmin) {
   try {
     const user=await User.findByIdAndDelete({_id:req.params.id});
     res.status(200).json("Account has been deleted");
   } catch (error) {
     return res.status(200).json(error);
   }
  } 
  else {
    return res.status(403).json("You can delete only your account!");
  }
 })
//get a user
router.get("/:id",async (req,res)=>{
  try {
    const user=await User.findById(req.params.id);
    const {password,updatedAt,...other}=user._doc;
    return res.status(200).json(other);
  } catch (error) {
   return res.status(500).json(error);
  }
})
//follow a user
router.put("/follow/:id",async (req,res)=>{
    if(req.body.password!==req.params.id) {
       try {
         const user=await User.findById(req.params.id);
         const currentUser=await User.findById(req.body.userId);
         if(!user.followers.includes(req.body.userId)) {
          await user.updateOne({$push:{followers:req.body.userId}});
        await currentUser.updateOne({$push:{followings:req.params.id}});
      return  res.status(200).json("user has been followed");
         } else {
          return res.status(403).json("You already follow this user");
         }
       } catch (error) {
        res.status(500).json(error);
       }
    }
    else {
      res.status(403).json("You cant't follow your self");
    }
})
//unfollow a user

router.put("/follow/:id",async (req,res)=>{
  if(req.body.password!==req.params.id) {
     try {
       const user=await User.findById(req.params.id);
       const currentUser=await User.findById(req.body.userId);
       if(user.followers.includes(req.body.userId)) {
        await user.updateOne({$pull:{followers:req.body.userId}});
      await currentUser.updateOne({$pull:{followings:req.params.id}});
    return  res.status(200).json("user has been unfollowed");
       } else {
        return res.status(403).json("You don't follow this user");
       }
     } catch (error) { 
      res.status(500).json(error);
     }
  }
  else {
    res.status(403).json("You cant't unfollo w your self");
  }
})

module.exports = router;
