const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const song = require("../../models/UserSong");
const key = require("../../config/keys.js").JWTPRIVATEKEY;

const createToken = (_id) => {
  return jwt.sign({ _id }, key, { expiresIn: "3d" });
};

router.get("/", async (req, res) => {
  const options = {
    sort: {
      createdAt: 1,
    },
  };
  const data = await song.find(options);
  if (data) {
    return res.status(200).send({ data });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

// async because the function should wait until the mongodb is connected and fetched the data
router.post("/save", async (req, res) => {
  const { name, artist, album, imageURL, musicGenre, isUsers } = req.body;

  const songExists = await song.findOne({ name });
  if (songExists) {
    return res.status(400).json({ message: "Song already created by you" });
  }

  const songCreated = await song.create({
    name,
    artist,
    album,
    imageURL,
    musicGenre,
    isUsers,
  });
  if (songCreated) {
    res.status(200).json({
      _id: songCreated._id,
      name: songCreated.name,
      artist: songCreated.artist,
      album: songCreated.album,
      imageURL: songCreated.imageURL,
      musicGenre: songCreated.musicGenre,
      isUsers: songCreated.isUsers,
    });
  } else {
    return res.status(400).json({ message: "Error occured" });
  }
});

// request to get a single artist information
router.get("/getOne/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const data = await song.findOne(filter);

  if (data) {
    return res.status(200).send({ success: true, song: data });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const result = await song.deleteOne(filter);
  if (result) {
    return res
      .status(200)
      .send({ success: true, msg: "Data deleted successfully", data: result });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

router.put("/update/:id", async (req, res) => {
  song
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          artist: req.body.artist,
          album: req.body.album,
          imageURL: req.body.imageURL,
        },
      }
    )
    .then((result) => {
      res.status(200).json({ success: true, msg: "Data updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ success: false });
    });
});

module.exports = router;
