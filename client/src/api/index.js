import axios from "axios";

// Create an axios instance with the base URL
const API = axios.create({ baseURL: "http://localhost:5000" });

// Posts endpoints
export const fetchPost = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// User authentication endpoints
export const signIn = (userData) => API.post("/user/signin", userData);
export const signUp = (userData) => {
  return API.post("/user/signup", userData);
};
