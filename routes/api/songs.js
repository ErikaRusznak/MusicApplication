const express = require("express");
const router = express.Router();

const song = require("../../models/Song");

router.get("/getAll", async (req, res) => {
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
  const newSong = song({
    name: req.body.name,
    artist: req.body.artist,
    album: req.body.album,
    // songURL: req.body.songURL,
    imageURL: req.body.imageURL,
    musicGenre: req.body.musicGenre,
    isFavorite: req.body.isFavorite,
    isBought: req.body.isBought,
  });

  try {
    const savedSong = await newSong.save();
    return res.status(200).send({ success: true, artist: savedSong });
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
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
  const filter = { _id: req.params.id };

  const options = {
    upsert: true, // will create a new obj if the id is no found
    new: true,
  };

  try {
    const result = await song.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        artist: req.body.artist,
        album: req.body.album,
        // songURL: req.body.songURL,
        imageURL: req.body.imageURL,
        musicGenre: req.body.musicGenre,
        isFavorite: req.body.isFavorite,
        isBought: req.body.isBought,
      },
      options
    );
    return res.status(200).send({ success: true, data: result });
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
  }
});
module.exports = router;
