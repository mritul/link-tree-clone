const express = require("express");
const app = express();

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("You've reached the login page");
});

router.get("/register", (req, res) => {
  res.send("You've reached the register page");
});

module.exports = router;
