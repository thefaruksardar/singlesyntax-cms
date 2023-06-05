const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    body: {
      required: true,
      type: String,
    },
    permalink: {
      required: true,
      type: String,
      unique: true,
    },
    category: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
      unique: true,
    },
    description: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    isdraft: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

const postModel =
  mongoose.model.postSchema || mongoose.model("Posts", postSchema);

module.exports = postModel;
