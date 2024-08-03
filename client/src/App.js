import React from "react";
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
  );
}
