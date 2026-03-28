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

// Sparkle animation
const sparkle = keyframes`
  0% { opacity: 0; transform: scale(0.5) translateY(0px); }
  50% { opacity: 1; transform: scale(1) translateY(-8px); }
  100% { opacity: 0; transform: scale(0.5) translateY(-16px); }
`;

// Sparkle positions around the oval
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
      
      sx={{
        flexGrow: 1,
        p: 4,
        border: "5px solid #273627ff",
        borderRadius: 3,
        backgroundColor: "#0e140d",
        m: 2,
        mb: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid container spacing={10} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width={{
              xs: 200,
              sm: 250,
              md: 300,
              lg: 350,
              xl: 400,
            }}
            height={{
              xs: 250,
              sm: 300,
              md: 350,
              lg: 400,
              xl: 450,
            }}
       
          >
            {/* Sparkles around the oval */}
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
                width: "100%",
                height: "100%",
                borderRadius: "50% / 60%",
                border: "4px solid #273627ff",
                boxShadow: "0 12px 35px rgba(0,0,0,0.3)",
                overflow: "hidden",
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%)",
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

        {/* RIGHT SIDE */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // vertical centering
            height: "100%", // match image height
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h2" fontWeight="bold" textAlign={"center"}>
              Katie Wunderle
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              textAlign={"center"}
            >
              Full-Stack Developer
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button variant="contained">Resume</Button>
              <Button variant="outlined">Contact</Button>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              mt={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <a
                href="https://github.com/kwunderle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/katharine-wunderle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </a>
              <a
                href="mailto:katharinewunderle@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <EmailIcon />
                </IconButton>
              </a>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Body;
