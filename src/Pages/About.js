import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TechIcons from "../Components/TechIcons";

const sections = [
  {
    title: "Where It Started",
    text: `My first computer was a Mac II, and from an early age I was encouraged to explore software, read documentation, and figure things out on my own. That early exposure built the foundation for how I approach technology today—curious, hands-on, and always learning.`,
    img: "https://picsum.photos/600/400?random=1",
  },
  {
    title: "Creative Roots",
    text: `I’ve always been drawn to art and graphic design. Before I ever thought of myself as a developer, I was focused on visuals—layouts, color, and user experience. That creative background still shapes how I build applications, blending function with design.`,
    img: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "Early Web Development",
    text: `As a kid, I built websites on platforms like Angelfire and Geocities, diving deep into HTML and CSS to customize everything. I carried that into customizing profiles and pages on MySpace and Neopets, where I learned how powerful code could be for self-expression.`,
    img: "https://picsum.photos/600/400?random=3",
  },
  {
    title: "Full-Stack Mindset",
    text: `Today, I approach development as a full-stack engineer—comfortable working across the entire application. From building responsive frontends to designing backend logic, I enjoy connecting all the pieces into a cohesive product.`,
    img: "https://picsum.photos/600/400?random=4",
  },
];

export default function About() {
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
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "monospace",
            color: "#7CFC00",
            mb: 2,
            textAlign: "center",
          }}
        >
          About Me
        </Typography>
        <TechIcons />
        {sections.map((section, index) => (
          <Grid
            container
            spacing={3}
            direction={{
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            alignItems="flex-start"
            key={index}
            sx={{ mb: 4 }}
          >
            {/* Image */}
            <Grid item xs={12} md={4} sx={{ flexShrink: 0 }}>
              <Box
                component="img"
                src={section.img}
                alt={section.title}
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  height: "auto",
                  borderRadius: 2,
                  border: "3px solid #273627ff",
                }}
              />
            </Grid>

            {/* Text */}
            <Grid item xs={12} md={8} sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "monospace",
                  mb: 1,
                  color: "#7CFC00",
                  textAlign: "center",
                }}
              >
                {section.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  color: "#ccc",
                  lineHeight: 1.6,
                  textAlign: "justify",
                }}
              >
                {section.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
