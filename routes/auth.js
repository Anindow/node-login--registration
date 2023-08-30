const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    // Check if the email is already registered
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).send("Email already exists");
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Create a new user
    const user = new User({
        
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
    });

    // Save the user to the database
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // Check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Email or password is incorrect");
    }

    // Compare the password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).send("Email or password is incorrect");
    }

    // Create and assign a JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.header("auth-token", token).send(token);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
