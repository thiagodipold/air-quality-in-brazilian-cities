import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
    body2: {
      fontSize: "17px",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#44c287",
    },
    info: {
      main: "#000",
    },
  },
});
