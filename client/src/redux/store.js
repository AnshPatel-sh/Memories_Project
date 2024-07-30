import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice.js";

export const store = configureStore({
  reducer: {
    postDataInRedux: postSlice,
  },
});
