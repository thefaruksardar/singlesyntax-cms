const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  featuredImage: {
    required: true,
    type: String,
  },
});

const featuresImageModel =
  mongoose.models.featuresImageModel ||
  mongoose.model("featuredImage", imageSchema);

module.exports = featuresImageModel;
