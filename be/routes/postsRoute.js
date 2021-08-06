const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");



//Create Post
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500)
    }
})

//Update Post
router.put("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set: req.body,
                },{new:true})
                res.status(200).json(updatedPost)
            } catch (error) {
                res.status(500)
            }

        }else{
            res.status(401).json("You can only update your own posts!")
        }
    } catch (error) {
        res.status(500)
    }
})

//Delete Post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted!");
        } catch (err) {
          res.status(500)
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500)
    }
  });


//Get Post
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router