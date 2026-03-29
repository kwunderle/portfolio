import React from "react";
import Box from "@mui/material/Box";

export default function PageContainer({ children, ...props }) {
  return (
    <Box
      sx={{
        width: "100%",

        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        border: "5px solid #273627ff",
        backgroundColor: "#0e140d",
        boxShadow: "0 12px 35px rgba(0,0,0,0.3)",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}