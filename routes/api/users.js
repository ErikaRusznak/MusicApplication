const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Model
const User = require("../../models/User");

// controller functions
const { registerUser, loginUser } = require("../../controllers/userController");

// routes
router.post("/login", loginUser);
router.post("/register", registerUser);


module.exports = router;
