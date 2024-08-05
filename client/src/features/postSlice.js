import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index.js";

// const initialState = {
//   posts: [],
// };

/**Fucntion 1 -----FETCH ALL THE POST DATA----- */
export const fetchPost = createAsyncThunk("/posts/fetchpost", async () => {
  try {
    const { data } = await api.fetchPost();
    return data;
  } catch (error) {
    console.log(error);
  }
});

/**FUNCTION 2 -----CREATE THE POST----- */
export const createPost = createAsyncThunk("/posts", async (newPost) => {
  try {
    const { data } = await api.createPost(newPost);
    return data;
  } catch (error) {
    console.log(error);
  }
});

/**FUNCTION 3 -----UPDATE THE POST----- */
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, updatedPost }) => {
    const { data } = await api.updatePost(id, updatedPost);
    return data;
  }
);

/**FUNCTION 4 -----DELETE THE POST----- */
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await api.deletePost(id);
  return id;
});



export const likePost = createAsyncThunk(
  "posts/likePost",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.likePost(id);
      return data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/** -----POST SLICE----- */
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    currentId: null,
  },
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      /**FETCH POST REDUCER */
      .addCase(fetchPost.pending, (state) => {
        return state;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        return state;
      })
      /**CREATE POST REDUCER */
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      /**UPDATE POST REDUCER */
      .addCase(updatePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          return post._id === action.payload._id ? action.payload : post;
        });
      })
      /**DELETE POST REDUCER */
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
        state.currentId = null;
      })
      /**LIKE UPDATE */
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      });
  },
});

export const { setCurrentId } = postSlice.actions;

export default postSlice.reducer;
