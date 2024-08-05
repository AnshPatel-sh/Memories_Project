import postMessage from "../models/postMessages.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

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
  const post = req.body;
  const { userId } = req;
  try {
    const newPost = new postMessage({
      ...post,
      creator: userId,
      createdAt: new Date().toISOString(),
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await postMessage.findById(id);

  if (post.creator !== req.userId)
    return res.status(403).send("You are not authorized to update this post.");

  const updatedPost = {
    creator: req.userId,
    title,
    message,
    tags,
    selectedFile,
    _id: id,
  };

  await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  try {
    const post = await postMessage.findById(id);

    if (post.creator !== req.userId)
      return res
        .status(403)
        .send("You are not authorized to delete this post.");

    await postMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req;

    if (!userId) {
      return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No post with id: ${id}`);
    }

    const post = await postMessage.findById(id);
    if (!post)
      return res.status(404).json({ message: `No post with id: ${id}` });

    const index = post.likes.findIndex((id) => id === String(userId));

    if (index === -1) {
      // User has not liked the post, so we add their like
      post.likes.push(userId);
    } else {
      // User has already liked the post, so we remove their like
      post.likes = post.likes.filter((id) => id !== String(userId));
    }

    const updatedPost = await postMessage.findByIdAndUpdate(id, post, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
};
