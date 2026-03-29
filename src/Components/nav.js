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
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#10490a" }}>
        <Toolbar>
          <Avatar
            component={Link}
            to="/"
            sx={{
              m: 1,
              cursor: "pointer",
              textDecoration: "none",
              color: "#FFFFFF",
              borderColor: "#00FF00",
              borderWidth: 2,
              ":hover": {
                borderColor: "#FF4D4D",
              },
            }}
          >
            KW
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            KATIE WUNDERLE
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="/About"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                backgroundColor: "#000000",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#333333",
                },
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
                backgroundColor: "#000000",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#333333",
                },
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
                backgroundColor: "#000000",
                color: "#FFFFFF",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#333333",
                },
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
