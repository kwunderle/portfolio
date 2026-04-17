import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TechIcons from "../Components/TechIcons";
import TypingText from "../Components/animations/TypingText";
import SubtitleRiseUp from "../Components/animations/SubtitleRiseUp";

import Caverns from "../../public/images/caverns.jpg"
import GradCap from "../../public/images/helloWorldGradCap.jpg";
import JavaPeace from "../../public/images/JavaPeace.jpg";
import GradSmile from "../../public/images/GradSmile.jpg";

const sections = [
  {
    title: "Where It Started",
    text: `My first computer was a Mac II, and from an early age I was encouraged to explore software, read documentation, and figure things out on my own. That early exposure built the foundation for how I approach technology today—curious, hands-on, and always learning.`,
    img: Caverns,
  },
  {
    title: "Creative Roots",
    text: `I’ve always been drawn to art and graphic design. Before I ever thought of myself as a developer, I was focused on visuals—layouts, color, and user experience. That creative background still shapes how I build applications, blending function with design.`,
    img: JavaPeace,
  },
  {
    title: "Early Web Development",
    text: `As a kid, I built websites on platforms like Angelfire and Geocities, diving deep into HTML and CSS to customize everything. I carried that into customizing profiles and pages on MySpace and Neopets, where I learned how powerful code could be for self-expression.`,
    img: GradCap,
  },
  {
    title: "Full-Stack Mindset",
    text: `Today, I approach development as a full-stack engineer—comfortable working across the entire application. From building responsive frontends to designing backend logic, I enjoy connecting all the pieces into a cohesive product.`,
    img: GradSmile,
  },
];

export default function About() {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [typingDone, setTypingDone] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2 }}>
      <Box
        sx={{
          flex: 1,
          p: { xs: 2, sm: 3, md: 4 },
          border: "5px solid #273627ff",
          borderRadius: 3,
          backgroundColor: "#0e140d",
        }}
      >
        <Stack spacing={{ xs: 1.5, md: 2 }} alignItems="center">
          <TypingText
            text="About Me"
            speed={80}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            start={pageLoaded}
            onComplete={() => setTypingDone(true)}
          />
          <SubtitleRiseUp
            text="I love art and technology"
            show={typingDone}
            fontSize={{ xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }}
          />
        </Stack>

        {sections.map((section, index) => (
          <Grid
            container
            spacing={3}
            direction={{
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            alignItems="center"
            key={index}
            sx={{ mb: 4, justifyContent: "center" }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
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

            <Grid
              item
              xs={12}
              md={8}
              sx={{ minWidth: 0, flex: 1, maxWidth: 1000 }}
            >
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
