import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ProjectCard from "../Components/ProjectCard";
import TypingText from "../Components/animations/TypingText";
import LCHS from "../../public/images/LCHS.png";

const projects = [
  {
    title: "Crimechester",
    description: "Mystery solving detective game with interactive graphics.",
    image: "https://picsum.photos/400/200?random=11",
    viewLink: "#",
    codeLink: "#",
  },
  {
    title: "Lorain County Historical Society",
    description: "Custom WordPress build with widget integration for email newsletters, tour and event bookings",
    image: LCHS,
    viewLink: "https://lchs.org/",
    codeLink: "#",
  },
  {
    title: "Tarot Reader",
    description: "Learn card meanings and generate readings.",
    image: "https://picsum.photos/400/200?random=13",
    viewLink: "#",
    codeLink: "#",
  },
  {
    title: "Game Garden",
    description: "Interactive SVGs with animated mini games.",
    image: "https://picsum.photos/400/200?random=14",
    viewLink: "#",
    codeLink: "#",
  },
];

export default function Projects() {
  const [pageLoaded, setPageLoaded] = React.useState(false);

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
        {/* Animated Title */}
        <Stack spacing={{ xs: 1.5, md: 2 }} alignItems="center" sx={{ mb: 4 }}>
          <TypingText
            text="My Projects"
            speed={80}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            start={pageLoaded}
          />
        </Stack>

        {/* Projects Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {projects.map((project, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                onView={() => window.open(project.viewLink, "_blank")}
                onCode={() => window.open(project.codeLink, "_blank")}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}