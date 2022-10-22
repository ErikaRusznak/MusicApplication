const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AlbumSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Album = mongoose.model("album", AlbumSchema);
