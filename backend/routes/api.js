const express = require("express");
const app = express();
const User = require("../models/user");
const Link = require("../models/link");

const router = express.Router();

router.post("/add-link", async (req, res) => {
  try {
    const link = new Link(req.body);
    const linkResponse = await link.save();
    const linkId = linkResponse._id;
    const userResponse = await User.findByIdAndUpdate(req.user._id, {
      $addToSet: { links: linkId },
    });
    const linkIdArray = userResponse.links;
    const linksResponse = await Link.find().where("_id").in(linkIdArray);
    res.send(linksResponse);
  } catch (err) {
    throw err;
  }
});

router.get("/get-links", async (req, res) => {
  try {
    const userResponse = await User.findById(req.user._id);
    const linkIdArray = userResponse.links;
    const linksResponse = await Link.find().where("_id").in(linkIdArray);
    res.send(linksResponse);
  } catch (err) {
    throw err;
  }
});

router.put("/update-link-status/:linkId", async (req, res) => {
  try {
    const linkId = req.params.linkId;

    req.body.active = !req.body.active; // For some reason the active received from frontend is the opposite (checked through console.log(req.body)).
    const linkResponse = await Link.findByIdAndUpdate(linkId, req.body);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
