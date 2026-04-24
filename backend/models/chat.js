const mongoose = require("mongoose");

module.exports = mongoose.model("Chat", {
  userId: String,
  title: String,
  messages: [{ role: String, content: String }]
});