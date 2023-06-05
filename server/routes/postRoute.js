const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
  postSend,
  postGet,
  postGetByP,
  singlePost,
  singlePostById,
  categorypost,
  updatepost,
  deletepost,
  featuredImage,
  postImage,
  searchPost,
} = require("../controllers/postController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/post/send", postSend);
router.get("/post/get", postGet);
router.get("/post/getByP/", postGetByP);
router.get("/post/get/:url", singlePost);
router.get("/post/getbyid/:id", singlePostById);
router.get("/post/category/:category", categorypost);
router.post("/post/image", upload.single("featuredImage"), featuredImage);
router.post("/api/blog/blogimage", upload.single("postImage"), postImage);

router.post("/post/update", updatepost);
router.get("/post/delete/:id", deletepost);
router.get("/post/search/:query", searchPost);

module.exports = router;
