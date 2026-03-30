import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Face from "../assets/face.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TypingText from "../Components/animations/TypingText";
import SubtitleRiseUp from "../Components/animations/SubtitleRiseUp";
import { keyframes } from "@mui/system";
import ResumeModal from "../Components/ResumeModal";
import ContactModal from "../Components/ContactModal";

const sparkle = keyframes`
  0% { opacity: 0; transform: scale(0.5) translateY(0px); }
  50% { opacity: 1; transform: scale(1) translateY(-8px); }
  100% { opacity: 0; transform: scale(0.5) translateY(-16px); }
`;

const sparkles = [
  { top: "-10%", left: "10%", delay: 0 },
  { top: "-5%", left: "50%", delay: 0.5 },
  { top: "10%", left: "80%", delay: 1 },
  { top: "50%", left: "-5%", delay: 1.2 },
  { top: "70%", left: "90%", delay: 1.5 },
  { top: "90%", left: "40%", delay: 0.8 },
];

export default function Home() {
  const name = "Katie Wunderle";
  const typingSpeed = 80;

  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [typingDone, setTypingDone] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [openResume, setOpenResume] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, sm: 6, md: 10 }}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            mx="auto"
            width={{ xs: 160, sm: 200, md: 280, lg: 320, xl: 400 }}
            height={{ xs: 200, sm: 240, md: 330, lg: 380, xl: 450 }}
          >
            {sparkles.map((s, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  boxShadow: "0 0 8px #fff",
                  top: s.top,
                  left: s.left,
                  opacity: 0,
                  animation: `${sparkle} 3s infinite`,
                  animationDelay: `${s.delay}s`,
                }}
              />
            ))}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50% / 60%",
                border: "4px solid #273627ff",
                boxShadow: "0 12px 35px rgba(0,0,0,0.3)",
                overflow: "hidden",
                background: "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%)",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={Face}
                alt="Katie Wunderle"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Stack spacing={{ xs: 1.5, md: 2 }}>
            <TypingText
              text={name}
              speed={typingSpeed}
              fontSize={{ xs: "1.8rem", sm: "2.2rem", md: "3rem" }}
              start={pageLoaded}
              onComplete={() => setTypingDone(true)}
            />
            <SubtitleRiseUp
              text="Full-Stack Developer"
              show={typingDone}
              fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}
            />
            <Stack direction="row" spacing={2} mt={2} justifyContent="center">
              <Button variant="contained" onClick={() => setOpenResume(true)}>
                Resume
              </Button>
              <Button variant="outlined" onClick={() => setOpenContact(true)}>
                Contact
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} mt={2} justifyContent="center">
              <a href="https://github.com/kwunderle" target="_blank" rel="noopener noreferrer">
                <IconButton><GitHubIcon /></IconButton>
              </a>
              <a href="https://www.linkedin.com/in/katharine-wunderle/" target="_blank" rel="noopener noreferrer">
                <IconButton><LinkedInIcon /></IconButton>
              </a>
              <a href="mailto:katharinewunderle@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconButton><EmailIcon /></IconButton>
              </a>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <ResumeModal open={openResume} onClose={() => setOpenResume(false)} />
      <ContactModal open={openContact} onClose={() => setOpenContact(false)} disableTitleAnimation />
    </>
  );
}