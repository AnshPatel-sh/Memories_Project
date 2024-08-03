import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Button, Grid, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Icon } from "./icon";

import { Input } from "./Input";
import {
  StyledPaper,
  StyledAvatar,
  StyledForm,
  SubmitButton,
  GoogleButton,
} from "./styles";
import jwt_decode from "jwt-decode"
export function Auth() {
  const [isSignup, setIsSignup] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {};

  const googleSuccess = async (res) => {
    const clientId = res?.clientId;
    const credential = res?.credential;
    try {
      console.log(res)
      console.log(clientId)
      console.log(credential)
    } catch (error) {}
  };

  const googleError = (error) => {
    console.log(`Something went wrong.. Please try again.`);
    console.log(error);
  };

  const handleChange = (e) => {};
  const switchMode = () => {
    return setIsSignup((previousValue) => {
      return !previousValue;
    });
  };

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
          <GoogleLogin
            cookiePolicy="single_host_origin"
            onSuccess={googleSuccess}
            onError={googleError}
            render={(renderProps) => (
              <GoogleButton
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                SignIn with Google
              </GoogleButton>
            )}
          />

          {/* <GoogleOAuthProvider clientId="347916383681-ihj0j3t3jttm1a813mbjii5of488fuqp.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={googleSuccess}
              onError={googleError}
              useOneTap
            />
          </GoogleOAuthProvider> */}

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
