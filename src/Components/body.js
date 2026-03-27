import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { keyframes } from "@mui/system";
import Face from "../assets/face.jpg";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// Sparkle animation (twinkle & float)
const sparkle = keyframes`
  0% { opacity: 0; transform: scale(0.5) translateY(0px); }
  50% { opacity: 1; transform: scale(1) translateY(-8px); }
  100% { opacity: 0; transform: scale(0.5) translateY(-16px); }
`;

// Sparkle positions outside the oval
const sparkles = [
  { top: "-10%", left: "10%", delay: 0 },
  { top: "-5%", left: "50%", delay: 0.5 },
  { top: "10%", left: "80%", delay: 1 },
  { top: "50%", left: "-5%", delay: 1.2 },
  { top: "70%", left: "90%", delay: 1.5 },
  { top: "90%", left: "40%", delay: 0.8 },
];

function Body() {
  return (
    <Box
      component="section"
      sx={{
        flexGrow: 1,
        p: 4,
        border: "5px solid #273627ff",
        borderRadius: 3,
        m: 2,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        
        {/* LEFT SIDE - IMAGE WITH OUTER SPARKLES */}
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center" position="relative" width={250} height={300}>
            
            {/* Sparkles outside the oval */}
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

            {/* Outer Box: border + shadow */}
            <Box
              sx={{
                position: "relative",
                width: 220,
                height: 280,
                borderRadius: "50% / 60%",
                border: "4px solid #273627ff",
                boxShadow: "0 12px 35px rgba(0,0,0,0.3)",
                overflow: "hidden",
                background: "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%)",
                cursor: "pointer",
                "&:hover img": {
                  transform: "scale(1.05) rotate(1deg)",
                  transition: "transform 0.5s ease-in-out",
                },
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
                  transition: "transform 0.5s ease-in-out",
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* RIGHT SIDE - TEXT CONTENT */}
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <Typography variant="h3" fontWeight="bold">
              Katie Wunderle
            </Typography>

            <Typography variant="h5" color="text.secondary">
              Full-Stack Developer
            </Typography>

            <Stack direction="row" spacing={2} mt={2}>
              <Button variant="contained">Resume</Button>
              <Button variant="outlined">Contact</Button>
            </Stack>

            <Stack direction="row" spacing={1} mt={2}>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <EmailIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Body;