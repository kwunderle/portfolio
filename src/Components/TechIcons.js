import React from "react";
import { Box, IconButton } from "@mui/material";
// import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Code as CodeIcon, Html as HtmlIcon, Css as CssIcon, Javascript as JsIcon, Databases as DbIcon, RMobiledata as RIcon, CSharp as CSharpIcon, Java as JavaIcon, Python as PythonIcon } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import HTML5Icon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JsIcon from "@mui/icons-material/Javascript";
import DSIcon from "@mui/icons-material/Dataset";

const techIcons = [
  { name: "HTML", icon: <HTML5Icon sx={{ color: "#7CFC00" }} /> },
  { name: "CSS", icon: <CssIcon sx={{ color: "#7CFC00" }} /> },
  { name: "JavaScript", icon: <JsIcon sx={{ color: "#7CFC00" }} /> },
  { name: "DS", icon: <DSIcon sx={{ color: "#7CFC00" }} /> },
//   { name: "DB", icon: <DbIcon sx={{ color: "#7CFC00" }} /> },
//   { name: "C#", icon: <CSharpIcon sx={{ color: "#7CFC00" }} /> },
//   { name: "Java", icon: <JavaIcon sx={{ color: "#7CFC00" }} /> },
//   { name: "R", icon: <RIcon sx={{ color: "#7CFC00" }} /> },
//   { name: "Python", icon: <PythonIcon sx={{ color: "#7CFC00" }} /> },
  // Add more icons as needed
];

export default function TechIcons() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 3 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
        {techIcons.map((tech, index) => (
          <IconButton key={index} title={tech.name}>
            {tech.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}