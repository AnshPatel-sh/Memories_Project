import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice.js";
import authSlice from "../features/authSlice.js";

export const store = configureStore({
  reducer: {
    postDataInRedux: postSlice,
    auth:authSlice
  },
});
