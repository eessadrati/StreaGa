const express = require('express');
const {createUser,deleteUser,getUser,getUserByUsername,getAllUsers,updateUser,follow, unfollow,followCheck,unfollowCheck} = require('../methods/user');
const {signIn, logOut, requireSignIng} = require('../methods/auth');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const router = express.Router();

router.post('/api/users/create', createUser);
router.get('/api/users/:id', getUser);
router.get('/api/users/user/:username', getUserByUsername);
router.get('/api/users', getAllUsers);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);
router.post('/api/users/signin', signIn);
router.get('/api/users/logout', logOut);
router.post('/api/users/follow/:userId/:targetId', followCheck, follow);
router.post('/api/users/unfollow/:userId/:targetId', unfollowCheck, unfollow);

// Upload image to cloudinary
router.post("/api/users/image/upload", upload.single("image"), async (req, res) => {
    try {
        console.log(req.file)
      const result = await cloudinary.uploader.upload(req.file.path);
      res.json(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  });
  
  // Delete image from cloudinary
  router.delete("/image/delete/:imageId", async (req, res) => {
    const imageId = req.params.imageId;
    console.log(imageId)
    cloudinary.uploader.destroy(imageId, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Update image in cloudinary
  router.patch(
    "/image/update/:imageId",
    upload.single("image"),
    async (req, res) => {
      const imageId = req.params.imageId;
      await cloudinary.uploader.destroy(imageId);
      cloudinary.uploader.upload(req.file.path, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        } else {
          res.status(200).json(result);
        }
      });
    }
  );

module.exports = router;
