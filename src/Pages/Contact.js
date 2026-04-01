import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TypingText from "../Components/animations/TypingText";

export default function Contact() {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  React.useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const functions = getFunctions();
      const sendEmail = httpsCallable(functions, "sendContactEmail");
  
      await sendEmail(formData);
  
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2 }}>
      <Box
        sx={{
          flex: 1,
          p: { xs: 2, sm: 3, md: 4 },
          border: "5px solid #273627ff",
          borderRadius: 3,
          backgroundColor: "#0e140d",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <Stack spacing={{ xs: 1.5, md: 2 }} alignItems="center" sx={{ mb: 4 }}>
          <TypingText
            text="Contact Me"
            speed={80}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            start={pageLoaded}
          />
          <Typography
            sx={{ color: "#7CFC00", fontFamily: "monospace", textAlign: "center" }}
          >
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

          <Button
            type="submit"
            variant="contained"
            sx={{
              alignSelf: "center",
              backgroundColor: "#7CFC00",
              color: "#0e140d",
              fontFamily: "monospace",
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              "&:hover": { backgroundColor: "#5edc00" },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}