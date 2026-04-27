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
import Cave from "../../public/images/frogcave.png";

const sections = [
  {
    title: "Creative Roots",
    text: `My first computer was a Mac II, and when I was old enough to sit at the helm, public use of the internet was on the rise and I watched it grow into an everyday necessity. From an early age I was encouraged to explore software, read documentation, and troubleshoot network and hardware issues. I have always been interested in graphics and games and how creativity and technology work together to bring life to digital art and stories. That early exposure built the foundation for how I approach development today; curious, innovative, and resourceful.`,
    img: Caverns,
  },
  {
    title: "Early Web Development",
    text: `Before I ever thought of myself as a developer, I was focused on layouts, color, and user experience. That creative background still shapes how I build applications, blending function with design. Growing up, I customized pages in browser based games and built sites on content management platforms like Angelfire and Geocities, diving deep into static HTML and CSS to learn how to use code for artistic expression. I carried that knowledge into using frameworks and component libraries as I learned backend languages and database concepts. This allows me to solve complex problems with dynamic solutions along with secure data operations and state management, while providing user interface functionality that is polished, efficient, and accessible.`,
    img: Cave,
  },
  {
    title: "Full-Stack Mindset",
    text: `Today, as a full-stack engineer, I am comfortable working across an entire application. From building responsive layouts to designing backend logic, I enjoy connecting all the pieces into a cohesive product. Web and software development gives me the opportunity to take on roles such as artist, detective, data scientist, and mathematician.`,
    img: GradCap,
  },
  // {
  //   title: "Full-Stack Mindset",
  //   text: `Today, I approach development as a full-stack engineer—comfortable working across the entire application. From building responsive frontends to designing backend logic, I enjoy connecting all the pieces into a cohesive product.`,
  //   img: GradSmile,
  // },
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
