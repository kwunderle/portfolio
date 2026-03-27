import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import navbar from "./Navigation/navbar";

function layout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default layout;
