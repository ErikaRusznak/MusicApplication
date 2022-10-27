const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSongSchema = new Schema(
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
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSong = mongoose.model("userSong", UserSongSchema);
