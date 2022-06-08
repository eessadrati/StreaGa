const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Channel = require("../models/channel");

router.get("/", (req, res, next) => {
  Channel.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res, next) => {
  const channel = new Channel({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    userId: req.body.userId,
    tags: req.body.tags,
    description: req.body.description,
  });
  channel.save()
    .then((result) => {
      res.status(200).json({
        message: "Channel created",
        channel: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:channelId", (req, res, next) => {
  const id = req.params.channelId;
  Channel.findById(id)
    .exec()
    .then((doc) => {
      console.log("Frome data base", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.patch("/:channelId", (req, res, next) => {
  const id = req.params.channelId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Channel.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/:channelId", (req, res, next) => {
  const id = req.params.channelId;
  Chanel.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// Upload image to cloudinary
router.post("/image/upload", upload.single("image"), async (req, res) => {
  try {
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
