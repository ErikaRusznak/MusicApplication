const express = require("express");
const router = express.Router();

const artist = require("../../models/Artist");

router.get("/getAll", async (req, res) => {
  const options = {
    sort: {
      createdAt: 1,
    },
  };
  const data = await artist.find(options);
  if (data) {
    return res.status(200).send({ success: true, artist: data });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

// async because the function should wait until the mongodb is connected and fetched the data
router.post("/save", async (req, res) => {
  const newArtist = artist({
    name: req.body.name,
    imageURL: req.body.imageURL,
  });

  try {
    const savedArtist = await newArtist.save();
    return res.status(200).send({ success: true, artist: savedArtist });
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
  }
});

// request to get a single artist information
router.get("/getOne/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const data = await artist.findOne(filter);

  if (data) {
    return res.status(200).send({ success: true, artist: data });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const result = await artist.deleteOne(filter);
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
    const result = await artist.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
      },
      options
    );
    return res.status(200).send({ success: true, data: result });
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
  }
});

module.exports = router;
