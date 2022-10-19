const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const songs = require("./routes/api/songs");
const users = require("./routes/api/users");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();

const songs = require("./routes/api/songs");

app.use(express.json());

// DB config
const db = require("./config/keys.js").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/songs", songs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
