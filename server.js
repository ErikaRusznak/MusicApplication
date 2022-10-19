const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //allows us to take request and get data from the body

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const songs = require("./routes/api/songs");
const users = require("./routes/api/users");

const app = express();
app.use(express.json());

var cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// DB config
const db = require("./config/keys.js").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/songs", songs);
app.use("/api/users", users);
// app.use(notFound);
// app.use(errorHandler);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
