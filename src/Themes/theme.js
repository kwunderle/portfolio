import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const newTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00FF00",  // Bright green from the images
    },
    secondary: {
      main: "#FF0000",  // Bright red from the images
    },
    background: {
      default: "#000000",  // Black background
      paper: "#1a1a1a",  // Slightly lighter background for cards and surfaces
    },
    text: {
      primary: "#FFFFFF",  // White text for contrast
      secondary: "#B0B0B0",  // Light gray for secondary text
    },
    action: {
      active: "#FFFFFF",  // Active elements like icons and buttons
      hover: "#FF4D4D",  // Light red for hover effects on buttons
    },
    error: {
      main: "#FF3333",  // Slightly darker red for errors or warnings
    },
    warning: {
      main: "#FFB300",  // Yellow-orange for warnings
    },
    info: {
      main: "#00BCD4",  // Cyan for informational messages
    },
    success: {
      main: "#4CAF50",  // Green for success messages
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#FFFFFF',  // White for headers
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#FFFFFF',  // Primary text is white for contrast
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#B0B0B0',  // Light gray for secondary text
    },
    button: {
      fontWeight: 600,
      textTransform: 'uppercase',
      color: '#FFFFFF',
      padding: '8px 16px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',  // Rounded corners for buttons
          '&:hover': {
            backgroundColor: '#FF4D4D',  // Light red on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',  // Dark background for cards
          color: '#FFFFFF',  // Ensure card text is legible
          '&:hover': {
            backgroundColor: '#333333',  // Slightly lighter hover effect
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',  // Black app bar
          boxShadow: 'none',  // Optional: remove shadow for a clean look
        },
      },
    },
  },
});

const responsiveDarkTheme = responsiveFontSizes(newTheme);

export default responsiveDarkTheme;