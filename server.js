const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// DB config
const db = require("./config/keys.js").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// routes
const songs = require("./routes/api/songs");
const boughtSongs = require("./routes/api/userSongs");
const users = require("./routes/api/users");
const artists = require("./routes/api/artists");

app.use("/api/users", users);
app.use("/api/songs", songs);
app.use("/api/artists", artists);
app.use("/api/userSongs", boughtSongs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
