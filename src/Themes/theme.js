import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const newTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00FF00",
    },
    secondary: {
      main: "#FF0000",
    },
    background: {
      default: "#000000",
      paper: "#1a1a1a", 
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
    action: {
      active: "#FFFFFF",
      hover: "#FF4D4D",
    },
    error: {
      main: "#FF3333",
    },
    warning: {
      main: "#FFB300",
    },
    info: {
      main: "#00BCD4",
    },
    success: {
      main: "#4CAF50",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#FFFFFF',
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
      color: '#FFFFFF',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#B0B0B0',
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
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#FF4D4D',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          boxShadow: 'none', 
        },
      },
    },
  },
});

const responsiveDarkTheme = responsiveFontSizes(newTheme);

export default responsiveDarkTheme;