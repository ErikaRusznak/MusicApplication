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
    isFavorite: {
      type: Boolean,
      required: true,
      default: false,
    },
    isBought: {
      type: Boolean,
      required: true,
      default: false,
    },
    musicGenre: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Song = mongoose.model("song", SongSchema);
