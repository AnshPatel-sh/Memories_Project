import React from "react";
<<<<<<< HEAD
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar.js";
import { Home } from "./Components/Home/Home.js";
import { Auth } from "./Components/Auth/Auth.js";

export function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
=======
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import { Form } from "./Components/Forms/Form";
import { Posts } from "./Components/Posts/Posts";
import { AppBarStyled, HeadingStyled, ImageStyled } from "./styles.js";

export function App() {
  return (
    <Container maxWidth="lg">
      <AppBarStyled position="static" color="inherit">
        <HeadingStyled variant="h2" align="center">
          Memories
        </HeadingStyled>
        <ImageStyled src={memories} alt="icon" height="60" />
      </AppBarStyled>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

   
>>>>>>> f1701dc7ad7792e37011c23eda43885af0503cb4
  );
}
