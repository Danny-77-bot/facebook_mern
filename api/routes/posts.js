const express=require("express");
const Post = require("../models/Post");
const User = require("../models/User");
const router=express.Router();

//create a post
router.post("/",async(req,res)=>{
    const newPost=new Post(req.body);
    try {
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        
    }
})
//update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        if (post.userId !== req.body.userId) {
            return res.status(403).json({ error: "You can only update your own post" });
        }
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body });

        res.status(200).json("your post has been updated");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

//delete a post
router.delete("/:id", async (req, res) => {
    try {
        
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        
        if (post.userId !== req.body.userId) {
            return res.status(403).json({ error: "You can only delete your own post" });
        }

      
        await Post.deleteOne({ _id: req.params.id });

       
        res.status(200).json({ message: "Your post has been deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

//like/dislike a post
router.put("/like/:id",async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("the post has been liked");
        } else {
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("the post has been disliked");
        }
    } catch (error) {
     res.status(500).json(error);   
    }
})
//get a post
router.get("/:id",async(req,res)=>{
    try {
       const post=await Post.findById(req.params.id);
       res.status(200).json(post); 
    } catch (error) {
      res.status(500).json(error);  
    }
})

//get timeline posts
router.get('/timeline/all', async (req, res) => {
    try {
        // Find the current user
        const currentUser = await User.findById(req.body.userId);

        // Find posts from the current user
        const userPosts = await Post.find({ userId: currentUser._id });

        // Find posts from the user's friends
        const friendPosts = await Promise.all(
            currentUser.followings.map(async (friendId) => {
                const posts = await Post.find({ userId: friendId });
                return posts;
            })
        );

        // Concatenate userPosts and friendPosts into a single array
        const timelinePosts = userPosts.concat(...friendPosts);

        // Sort posts by createdAt (if necessary)
        timelinePosts.sort((a, b) => b.createdAt - a.createdAt);

        // Respond with the timeline posts
        res.json(timelinePosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports=router;