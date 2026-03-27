import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import navbar from "./Navigation/navbar";

function layout() {
  return (
    <main>
      <Outlet />
      <Box component="section" sx={{ p: 2, border: "5px solid grey", m: 2 }}>
        That's Mr Box
      </Box>
    </main>
  );
}

export default layout;
