import React from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function ResumeModal({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      transitionDuration={400}
    >
      <Box
        sx={{
          position: "relative",
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: "#0e140d",
          border: "5px solid #273627ff",
          borderRadius: 3,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "#7CFC00" }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            color: "#7CFC00",
            mb: 2,
            textAlign: "center",
          }}
        >
          My Resume
        </Typography>

        <Box
          component="iframe"
          src="/resume.pdf"
          sx={{
            width: "100%",
            height: { xs: 400, sm: 500, md: 600 },
            border: "2px solid #273627ff",
            borderRadius: 2,
            mb: 2,
          }}
        />

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            href="/resume.pdf"
            download="Katie_Wunderle_Resume.pdf"
          >
            Download
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}
