import React from "react";
import { Typography } from "@mui/material";

export default function SubtitleRiseUp({ text, show = true, fontSize = "1.5rem" }) {
  return (
    <Typography
      color="text.secondary"
      sx={{
        fontSize,
        fontFamily: "monospace",
        minHeight: "1.5em",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0px)" : "translateY(20px)",
        transition: "all 0.6s ease",
      }}
    >
      {text}
    </Typography>
  );
}