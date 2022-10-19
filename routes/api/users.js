const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Model
const User = require("../../models/User");

// controller functions
const { registerUser, loginUser } = require("../../controllers/userController");

// login route
router.post("/login", loginUser);

// signup route
router.post("/register", registerUser);

// router.route("/register").post(registerUser);
// router.route("/login").post(loginUser);

module.exports = router;
