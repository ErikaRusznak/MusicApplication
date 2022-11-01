const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SongSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
    },
    // songURL: {
    //   type: String,
    //   required: true,
    // },
    imageURL: {
      type: String,
      required: true,
    },
    musicGenre: {
      type: String,
      required: true,
    },
    isUsers: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Song = mongoose.model("song", SongSchema);
