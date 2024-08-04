import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const loadAuthDataFromStorage = () => {
  try {
    const authDataString = localStorage.getItem("profile");
    return authDataString ? JSON.parse(authDataString) : null;
  } catch (error) {
    console.error("Error loading auth data from localStorage:", error);
    return null;
  }
};

export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (credential, { rejectWithValue }) => {
    try {
      const decodedToken = jwtDecode(credential);
      console.log(`This is decoded Token`)
      console.log(decodedToken)
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
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.authData = action.payload;
      localStorage.setItem("profile", JSON.stringify(action.payload));
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;