const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArtistSchema = new Schema(
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

module.exports = Artist = mongoose.model("artist", ArtistSchema);
