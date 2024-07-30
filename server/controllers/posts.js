import postMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    console.log(postMessages);
    return res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    console.log(`Code reached here`);
    const post = req.body;
    const newPost = new postMessage(post);
    await newPost.save();
    console.log("New post saved:", newPost);
    return  res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
