const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const artist = require("../../models/Artist");
const key = require("../../config/keys.js").JWTPRIVATEKEY;

const createToken = (_id) => {
  return jwt.sign({ _id }, key, { expiresIn: "3d" });
};

router.get("/getAll", async (req, res) => {
  const options = {
    sort: {
      createdAt: 1,
    },
  };
  const data = await artist.find(options);
  if (data) {
    return res.status(200).send({ data });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

// async because the function should wait until the mongodb is connected and fetched the data
router.post("/save", async (req, res) => {
  const { name, imageURL, description } = req.body;

  const artistExists = await artist.findOne({ name });
  if (artistExists) {
    return res.status(400).json({ message: "Artist already exists" });
  }
  const savedArtist = await artist.create({
    name,
    imageURL,
    description,
  });

  if (savedArtist)
    return res.status(200).send({ success: true, artist: savedArtist });

  return res.status(400).send({ message: "Error occured" });
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
        description: req.body.description,
      },
      options
    );
    return res.status(200).send({ success: true, data: result });
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
  }
});

module.exports = router;
