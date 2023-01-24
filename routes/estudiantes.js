const router = require("express").Router();
const Estudiante = require("../models/Estudiante");
const Docente = require("../models/Docente");

//agregar estudiante
router.post("/", async (req, res) => {
  console.log(req.body)
  const newEstudiante = new Estudiante(req.body);
  try {
    const savedEstudiante = await newEstudiante.save();
    res.status(200).json(savedEstudiante);
  } catch (err) {
    res.status(500).json(err);
  }
});

//obtener todos los estudiantes
router.get("/all", async (req,res) =>{
  Estudiante.find().then((result) => {
    res.send(result)
  }).catch((err) =>{
    console.log(err)
  })
})
/* 
//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId); 
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts))
  } catch (err) {  
    res.status(500).json(err);
  }
});


//modificar estudiante
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//eliminar estudiante
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//obtener estudiante
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
 */



module.exports = router;