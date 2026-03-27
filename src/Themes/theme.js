import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const responsiveDarkTheme = responsiveFontSizes(darkTheme);

export default responsiveDarkTheme;
