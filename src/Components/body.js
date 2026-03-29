import React from "react";
import Box from "@mui/material/Box";
import Home from "../Pages/Home";

export default function Body() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          p: { xs: 2, sm: 3, md: 4 },
          border: "5px solid #273627ff",
          borderRadius: 3,
          backgroundColor: "#0e140d",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Home/>
      </Box>
    </Box>
  );
}
