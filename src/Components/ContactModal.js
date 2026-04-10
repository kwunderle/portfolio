import React from "react";
import Dialog from "@mui/material/Dialog";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TypingText from "../Components/animations/TypingText";

export default function ContactModal({ open, onClose, disableTitleAnimation = false }) {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "", message: ""}); //  = honeypot

  React.useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await fetch(
        "https://us-central1-portfolio-4c6cb.cloudfunctions.net/sendFormEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      }
    );

      const result = await response.json();

      if (result.success) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
        onClose();
      } else {
        console.error(result.error);
        alert("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth transitionDuration={400}>
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

        <Stack spacing={{ xs: 1.5, md: 2 }} alignItems="center" sx={{ mb: 4 }}>
          {disableTitleAnimation ? (
            <Typography
              fontWeight="bold"
              fontFamily="monospace"
              fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
              color="#7CFC00"
              textAlign="center"
            >
              Contact Me
            </Typography>
          ) : (
            <TypingText text="Contact Me" speed={80} fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }} start={pageLoaded} />
          )}
          <Typography sx={{ color: "#7CFC00", fontFamily: "monospace", textAlign: "center" }}>
            Have a question or want to collaborate? Send me a message!
          </Typography>
        </Stack>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              input: { color: "#ccc", fontFamily: "monospace" },
              label: { color: "#7CFC00" },
              fieldset: { borderColor: "#7CFC00" },
              "&:hover fieldset": { borderColor: "#7CFC00" },
            }}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              input: { color: "#ccc", fontFamily: "monospace" },
              label: { color: "#7CFC00" },
              fieldset: { borderColor: "#7CFC00" },
              "&:hover fieldset": { borderColor: "#7CFC00" },
            }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            sx={{
              input: { color: "#ccc", fontFamily: "monospace" },
              label: { color: "#7CFC00" },
              fieldset: { borderColor: "#7CFC00" },
              "&:hover fieldset": { borderColor: "#7CFC00" },
            }}
          />
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button type="submit" variant="contained">
              Send
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Close
            </Button>
          </Stack>
        </Box>
      </Box>
    </Dialog>
  );
}
