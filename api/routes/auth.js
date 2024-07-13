const express=require('express');
const router=express.Router();
const User=require("../models/User");
const bcrypt=require("bcrypt");
//register route
router.post("/register",async (req,res)=>{
   try {
    const salt=await bcrypt.genSalt(10);
    const hashedPassord=await bcrypt.hash(req.body.password,salt);
 const newUser= await new User({
    username:req.body.username,
    email:req.body.email,
    password:hashedPassord,
 })
 await newUser.save();
  res.status(201).json(newUser);
   } catch (error) {
    console.log(error);
   }

})

//login route

router.post('/login', async (req, res) => {
    try {
        // Find user by email
        const user = await User.findOne({ email: req.body.email });
        // If user not found, respond with 404
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare passwords
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        // If password is not valid, respond with 400
        if (!validPassword) {
            return res.status(400).json({ error: 'Wrong password' });
        }

        // If login successful, construct response object with user details (excluding password)
        const { password, ...userWithoutPassword } = user.toObject();

        // Respond with user details (excluding password)
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });

    }

    
});
module.exports=router;