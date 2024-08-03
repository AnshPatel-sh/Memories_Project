import React, { useState, useEffect } from "react";
import { Avatar, Button, Typography } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";

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
  const [user, setUser] = useState(null);


  const logout = () => {
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
            <Button variant="contained" color="secondary" onClick={logout}>
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
};

