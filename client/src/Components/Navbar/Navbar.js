import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice.js";

import memories from "../../images/memories.png";
import {
  AppBarStyled,
  HeadingStyled,
  ImageStyled,
  ToolbarStyled,
  ProfileStyled,
  UserNameStyled,
  BrandContainerStyled,
  PurpleStyled,
} from "./styles";

export function Navbar() {
  const user = useSelector((state) => state.auth.authData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <AppBarStyled position="static" color="inherit">
      <BrandContainerStyled>
        <HeadingStyled component={Link} to="/" variant="h2" align="center">
          Memories
        </HeadingStyled>
        <ImageStyled src={memories} alt="icon" height="60" />
      </BrandContainerStyled>
      <ToolbarStyled>
        {user ? (
          <ProfileStyled>
            <PurpleStyled>
              <Avatar alt={user?.result.name} src={user?.result.imageUrl}>
                {user?.result.name.charAt(0)}
              </Avatar>
            </PurpleStyled>
            <UserNameStyled variant="h6">{user?.result.name}</UserNameStyled>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </ProfileStyled>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </ToolbarStyled>
    </AppBarStyled>
  );
}
