const featuresImageModel = require("../model/featuredImageModel");
const postImageModel = require("../model/postImage");
const postModel = require("../model/postModel");
const { MongoClient } = require("mongodb");

// Send Post to MongoDB
const postSend = async (req, res) => {
  const {
    title,
    body,
    permalink,
    category,
    image,
    description,
    author,
    isdraft,
  } = req.body;

  // Checking if the input feilds are empty
  // let emptyFields = [];

  // if (!title) {
  //   emptyFields.push("title");
  // }
  // if (!body) {
  //   emptyFields.push("body");
  // }
  // if (!permalink) {
  //   emptyFields.push("permalink");
  // }
  // if (!image) {
  //   emptyFields.push("image");
  // }
  // if (!category) {
  //   emptyFields.push("category");
  // }
  // if (!description) {
  //   emptyFields.push("description");
  // }
  // if (!author) {
  //   emptyFields.push("author");
  // }
  // if (!isdraft) {
  //   emptyFields.push("isdraft");
  // }
  // if (emptyFields.length > 0) {
  //   return res
  //     .status(400)
  //     .json({ error: "Please fill in all the feilds", emptyFields });
  // }

  try {
    const createPost = await postModel.create({
      title,
      body,
      permalink,
      category,
      image,
      description,
      author,
      isdraft,
    });
    res.status(200).json(createPost);
  } catch (error) {
    res.status(401).json(error);
  }
};

// Get all the Post
const postGet = async (req, res) => {
  try {
    const getPost = await postModel.find().sort({ createdAt: -1 });

    res.status(200).json(getPost);
  } catch (error) {
    res.status(401).json(error);
  }
};

// Get all the Post
const postGetByP = async (req, res) => {
  const page = req.query.page || 0;
  const postPerPage = 12;

  try {
    const getPost = await postModel
      .find()
      .sort({ createdAt: -1 })
      .skip(page * postPerPage)
      .limit(postPerPage);
    res.status(200).json(getPost);
  } catch (error) {
    res.status(401).json(error);
  }
};

// Get Single Post
const singlePost = async (req, res) => {
  const { url } = await req.params;

  try {
    const singlePost = await postModel.find({ permalink: url });
    res.status(200).json(singlePost);
  } catch (error) {
    res.status(401).json(error);
  }
};

// Get Single Post
const singlePostById = async (req, res) => {
  const { id } = await req.params;

  try {
    const singlePostById = await postModel.find({ _id: id });
    res.status(200).json(singlePostById);
  } catch (error) {
    res.status(401).json(error);
  }
};

// Get Only Category
const categorypost = async (req, res) => {
  const { category } = await req.params;

  try {
    const categorypost = await postModel.find({ category: category });
    res.status(200).json(categorypost);
  } catch (error) {
    res.status(200).json(error);
  }
};

// Update Post
const updatepost = async (req, res) => {
  const {
    id,
    title,
    body,
    permalink,
    category,
    image,
    description,
    author,
    isdraft,
  } = await req.body;

  try {
    const updatepost = await postModel.findByIdAndUpdate(
      { _id: id },
      { title, body, permalink, category, image, description, author, isdraft }
    );

    res.status(200).json(updatepost);
  } catch (error) {
    res.status(200).json(error);
  }
};

// Delete Post
const deletepost = async (req, res) => {
  const { id } = await req.params;

  try {
    const deletePost = await postModel.findByIdAndDelete(id);
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(401).json(error);
  }
};

const featuredImage = async (req, res) => {
  let featuredImage = req.file ? req.file.originalname : null;

  try {
    const image = await featuresImageModel.create({ featuredImage });
    res.status(200).json({ image });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Post Image for blog
const postImage = async (req, res) => {
  // res.status(200).json({message: "hello"})
  let postImage = req.file ? req.file.originalname : null;

  try {
    await postImageModel.create({ postImage });
    res.status(200).json({ postImage });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Get Search Post
const searchPost = async (req, res) => {
  const { query } = req.params;

  try {
    const agg = [
      {
        $search: {
          text: {
            query: `${query}`,
            path: ["title", "body", "permalink"],
            fuzzy: {},
          },
        },
      },
    ];

    const client = await MongoClient.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const coll = client.db("test").collection("posts");
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();

    res.status(200).json(result);
    await client.close();
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = {
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
};
