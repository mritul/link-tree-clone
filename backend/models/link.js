const mongoose = require("mongoose");
const linkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: false,
  },
  clicks: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Link", linkSchema);
