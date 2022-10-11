const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AlbumSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  // picture: {
  //   type: String,
  //   required: true,
  // },
  isBought: {
    type: Boolean,
    required: true,
  }
});

module.exports = Album = mongoose.model("album", AlbumSchema);
