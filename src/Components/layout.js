import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
