const express = require("express");
const app = express();

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("You've reached the API test page");
});

module.exports = router;
