import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index.js";

const initialState = {
  post: [],
};

export const fetchPost = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await api.fetchPost();
  return data;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // FETCH_ALL: (state, action) => {},
    CREATE: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        return state
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        return state;
        
      });
  },
});

export const { FETCH_ALL, CREATE } = postSlice.actions;

export default postSlice.reducer;
