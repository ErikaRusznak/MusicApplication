const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();

// app.use(express.json());
var cors = require("cors");

app.use(cors());

const songs = require("./routes/songs");
const users = require("./routes/users");

// DB config
const db = require("./config/keys.js").mongoURL;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/songs", songs);
app.use("/api/users", users);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
