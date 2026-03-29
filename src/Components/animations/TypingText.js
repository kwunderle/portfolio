import React from "react";
import { Box, Typography } from "@mui/material";

export default function TypingText({
  text,
  start = false,
  speed = 80,
  fontSize = "3rem",
  onComplete,
}) {
  const [displayedText, setDisplayedText] = React.useState("");
  const startedRef = React.useRef(false); // ensures it only runs once initially

  const runTyping = () => {
    startedRef.current = true;
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);
  };

  // Start typing on page load
  React.useEffect(() => {
    if (start && !startedRef.current) {
      runTyping();
    }
  }, [start]);

  return (
    <Box
      sx={{ position: "relative", display: "inline-block", cursor: "pointer" }}
      onClick={runTyping}
    >
      <Typography
        fontWeight="bold"
        sx={{ fontSize, fontFamily: "monospace", visibility: "hidden" }}
      >
        {text}
      </Typography>
      <Typography
        fontWeight="bold"
        sx={{
          fontSize,
          fontFamily: "monospace",
          position: "absolute",
          top: 0,
          left: 0,
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
        }}
      >
        {displayedText}
        <Box
          component="span"
          sx={{
            ml: 0.5,
            width: "2px",
            height: "1em",
            display: "inline-block",
            backgroundColor: "#7CFC00",
            animation: "blink 1s infinite",
            "@keyframes blink": {
              "0%,50%,100%": { opacity: 1 },
              "25%,75%": { opacity: 0 },
            },
          }}
        />
      </Typography>
    </Box>
  );
}
