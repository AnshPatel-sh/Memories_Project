import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index.js";

// const initialState = {
//   posts: [],
// };

export const fetchPost = createAsyncThunk("/posts/fetchpost", async () => {
  try {
    const { data } = await api.fetchPost();
    console.log(`Fetch post function`);
    console.log(data) // this returns array
    return data;
  } catch (error) {
    console.log(error)
  }
});

export const createPost = createAsyncThunk("/posts", async (newPost) => {
  try {
    console.log(`Code entered createPost`);
    const { data } = await api.createPost(newPost);
    console.log("Response from backend:", data);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState:{
    posts:[]
  },
  reducers: {
    // FETCH_ALL: (state, action) => {},
    CREATE: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        return state;
        // state.loading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        // state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        return state;
        // state.loading = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        console.log(`New post received${action.payload}`);
        state.posts.push(action.payload);
        console.log(`Data added`);
        console.log(state);
      });
  },
});

export const { CREATE } = postSlice.actions;

export default postSlice.reducer;
