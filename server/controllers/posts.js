import postMessage from "../models/postMessages.js";
import mongoose from "mongoose";

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
    const post = req.body;
    const newPost = new postMessage(post);
    await newPost.save();
    return  res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};
