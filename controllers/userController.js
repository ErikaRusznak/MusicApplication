const jwt = require("jsonwebtoken");
const config = require("config");
const key = require("../config/keys.js").JWTPRIVATEKEY;
const asyncHandler = require("express-async-handler");

const User = require("../models/User");

const createToken = (_id) => {
  return jwt.sign({ _id }, key, { expiresIn: "3d" });
};

// // login user
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   // try {
//   //   const user = await User.login(email, password);

//   //   // create token
//   //   const token = createToken(user._id);

//   //   res.status(200).json({ token, user });
//   // } catch (error) {
//   //   res.status(400).json({ error: error.message });
//   // }
// };

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
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/register
//@access          Public
const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, bankCode } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ msg: "User already exists" });
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
    res.status(200).json({ user, token: createToken(user._id) });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }

  // try {
  //   const user = await User.register(
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //     bankCode
  //   );

  //   // create token
  //   const token = createToken(user._id);

  //   res.status(200).json({ token, user });
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
};

module.exports = { registerUser, loginUser };
