const mongoose = require("mongoose");

const postImageSchema = new mongoose.Schema({
  postImage: {
    required: true,
    type: String,
  },
});

const postImageModel =
  mongoose.models.postImageModel ||
  mongoose.model("postImage", postImageSchema);

module.exports = postImageModel;
