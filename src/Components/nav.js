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
      <AppBar position="static">
        <Toolbar>

          {/* Avatar → Home लिंक */}
          <Avatar
            component={Link}
            to="/"
            sx={{
              m: 1,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            KW
          </Avatar>

          {/* Name */}
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            KATIE WUNDERLE
          </Typography>

          {/* Spacer (pushes nav right) */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right-aligned nav */}
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="/About"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              About
            </Button>

            <Button
              component={Link}
              to="/Projects"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              Projects
            </Button>

            <Button
              component={Link}
              to="/Contact"
              variant="contained"
              color="secondary"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
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