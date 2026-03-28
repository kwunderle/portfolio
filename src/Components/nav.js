import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#10490a" }}>  {/* Darker red with grey undertones */}
        <Toolbar>

          {/* Avatar → Home Link */}
          <Avatar
            component={Link}
            to="/"
            sx={{
              m: 1,
              cursor: "pointer",
              textDecoration: "none",
              color: "#FFFFFF",  // White text for the avatar
              borderColor: "#00FF00",  // Green border
              borderWidth: 2,
              ":hover": {
                borderColor: "#FF4D4D",  // Light red hover effect for avatar
              }
            }}
          >
            KW
          </Avatar>

          {/* Name */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#FFFFFF",  // White text for better contrast
              textTransform: "uppercase",
            }}
          >
            KATIE WUNDERLE
          </Typography>

          {/* Spacer (pushes nav right) */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right-aligned nav */}
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="/About"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                backgroundColor: "#000000",  // Black button background
                color: "#FFFFFF",  // White text
                "&:hover": {
                  backgroundColor: "#333333",  // Darker gray on hover
                }
              }}
            >
              About
            </Button>

            <Button
              component={Link}
              to="/Projects"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                backgroundColor: "#000000",  // Black button background
                color: "#FFFFFF",  // White text
                "&:hover": {
                  backgroundColor: "#333333",  // Darker gray on hover
                }
              }}
            >
              Projects
            </Button>

            <Button
              component={Link}
              to="/Contact"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: "#000000",  // Black button background
                color: "#FFFFFF",  // White text
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#333333",  // Darker gray on hover
                }
              }}
            >
              Contact
            </Button>
          </Stack>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;