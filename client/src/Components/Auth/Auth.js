import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Input } from "./Input";
import {
  StyledPaper,
  StyledAvatar,
  StyledForm,
  SubmitButton,
  GoogleButton,
} from "./styles";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function Auth() {
  const [isSignup, setIsSignup] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {};

  const googleSuccess = async (credentialResponse) => {};

  const googleError = () => {};

  const handleChange = (e) =>{};
  const switchMode = ()=>{
    return setIsSignup((previousValue)=>{
        return (!previousValue)
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </SubmitButton>
          {/* <GoogleButton>
            <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
          </GoogleButton> */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </StyledForm>
      </StyledPaper>
    </Container>
  );
}
