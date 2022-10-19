const jwt = require("jsonwebtoken");
// const config = require("config");
const key = require("../config/keys.js").JWTPRIVATEKEY;
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const createToken = (_id) => {
  return jwt.sign({ _id }, key, { expiresIn: "3d" });
};

//@description     Login the user
//@route           POST /api/users/login
//@access          Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
      token: createToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Invalid Email or Password" });
    // res.status(401);
    // throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/register
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, bankCode } = req.body;
  
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
    // res.status(400);
    // throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    bankCode,
  });
  if (user) {
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      bankCode: user.bankCode,
      token: createToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Error occured" });
        // res.status(400);
        // throw new Error("Error occured");
  }
});

module.exports = { registerUser, loginUser };
