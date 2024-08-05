import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import * as api from "../api/index.js";

/**Storing state value user google login info in localstorage */
const loadAuthDataFromStorage = () => {
  try {
    const authDataString = localStorage.getItem("profile");
    return authDataString ? JSON.parse(authDataString) : null;
  } catch (error) {
    console.error("Error loading auth data from localStorage:", error);
    return null;
  }
};

/**Async thunk for googleLogin that decodes the user crendential */
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (credential, { rejectWithValue }) => {
    try {
      const decodedToken = jwtDecode(credential);
      console.log(`This is decoded Token`);
      console.log(decodedToken);
      return {
        token: credential,
        result: {
          email: decodedToken.email,
          name: decodedToken.name,
          picture: decodedToken.picture,
          sub: decodedToken.sub,
        },
      };
    } catch (error) {
      return rejectWithValue("Failed to decode token");
    }
  }
);

/**Async thunk for signin */
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.signIn(formData);
      localStorage.setItem("profile", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/**Async thunk for signup */

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (formData, { rejectWithValue }) => {
    try {
  
      const { data } = await api.signUp(formData);
      localStorage.setItem("profile", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/**Auth slice*/
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: loadAuthDataFromStorage(),
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("profile");
      state.authData = null;
    },
  },
  extraReducers: (builder) => {
    /**gooleLogin builder to store the incoming data into store  */
    builder
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.authData = action.payload;
        localStorage.setItem("profile", JSON.stringify(action.payload));
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.authData = action.payload;
        // state.loading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.authData = action.payload;
        // state.loading = false;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
