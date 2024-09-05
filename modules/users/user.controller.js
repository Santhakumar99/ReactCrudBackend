const mongoose = require("mongoose");
const config = require("config");
const User = require("./user.model");
const bcrypt = require("bcryptjs");

exports.getAllUsers = async (req, res) => {
  try {
    const getusers = await User.find({});
    res.json(getusers);
  } catch (err) {
    console.log("error" + err);
  }
};
exports.FindUser = async (req, res) => {
  try {
    const getusers = await User.findOne({ _id: req.params.id });
    res.json(getusers);
  } catch (err) {
    console.log("error" + err);
  }
};
exports.CreateAllUsers = async (req, res) => {
  try {
    const { name, age, email, mobile } = req.body;
    let user = new User({
      name,
      age,
      email,
      mobile,
      password :"user@123",
    });
    const CreateUsers = await user.save();
    res.json(CreateUsers);
  } catch (err) {
    console.log("error" + err);
  }
};
exports.UpdateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, email, mobile, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, age, email, mobile, password },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.DeleteUser = async (req, res) => {0
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.Login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  console.log(user);

  if (!user) {
    // Username not found
    return res.status(401).json({ message: "Invalid user" });
  } else {
    let p1 = req.body.password;
    let p2 = user.password;
    bcrypt.compare(p1, p2, (err, isMatch) => {
      // console.log(isMatch,"match")
      if (isMatch) {
        const token = user.generateAuthToken();
        // Increments the login count for the user
        user.incrementLoginCount();

        res.cookie("token", token, {
          httpOnly: true,
          sameSite: "strict",
          secure: false,
        }); // secure true to allow https only

        res.json({ message: "Login Success", status: 1, token: token });
      } else {
        //  Incorrect password
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      // If password matches then display true
      // console.log(isMatch);
    });
  }
};
