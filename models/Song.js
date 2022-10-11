const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SongSchema = new Schema({
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
  isFavorite: {
    type: Boolean,
    required: true,
  },
  isBought: {
    type: Boolean,
    required: true,
  },
  musicGenre: {
    type: String,
    required: true,
  },
  albumName: {
    type: String,
    required: true,
  },
});

module.exports = Song = mongoose.model("song", SongSchema);
