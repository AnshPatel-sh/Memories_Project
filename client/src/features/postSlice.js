import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    FETCH_ALL: (state, action) => {},
    CREATE: (state, action) => {},
  },
});


export const {FETCH_ALL,CREATE} = postSlice.actions

export default postSlice.reducer