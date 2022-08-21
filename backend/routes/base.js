const express = require("express");
const passport = require("passport");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Link = require("../models/link");

router.get("/", (req, res) => {
  res.send("Server up and running");
});

router.post("/register", async (req, res) => {
  try {
    //Hashing the incoming password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    const user = new User(req.body);
    const response = await user.save();
    console.log(response);
    res.send("Successfully registered");
  } catch (err) {
    throw err;
  }
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.send({ info });
    } else {
      req.login(user, (err) => {
        if (err) {
          throw err;
        }
        const obj_to_send = {
          info: info,
          user_id: user._id,
          username: user.username,
        };
        res.send(obj_to_send);
      });
    }
  })(req, res, next);
});

router.get("/authenticate", async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      user: {
        user_id: req.user._id,
        username: req.user.username,
      },
    });
  }
});

router.get("/:username", async (req, res) => {
  try {
    const userResponse = await User.findOne({ username: req.params.username });
    const linkIdArray = userResponse.links;
    const linksResponse = await Link.find().where("_id").in(linkIdArray);
    console.log(linksResponse);
    res.send(linksResponse);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
