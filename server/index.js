require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const postRoute = require("./routes/postRoute");
// To access req.body
app.use(express.json());

app.use(
  cors({
    origin: `${process.env.NEXT_PUBLIC_MAIN_DOMAIN}`,
  })
);

// Make Image folder public
app.use("/images", express.static("images"));

// Connecting to the MongoDB
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to the PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`There is something wrong: ${error}`);
  });

app.use("/", postRoute);
