import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        width: "100%",
      }}
    >
      <Typography variant="body2">&copy; 2026 Katie Wunderle. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;