// imports for Material UI components
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  /* change suggested to overcome the error of Material UI in Menu component inside MuiPrimarySearchAppBar component
  https://stackoverflow.com/a/64135466/7452548; 
  TODO: REVERT TO STABLE WITH UPDATED VERSION OF MATERIAL UI where error is fixed
   */
  ThemeProvider,
} from "@material-ui/core";

// imports for custom components
import { Routes } from "./routes";

// overriding default Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d32f2f" /* dark red color */,
      light: "#ffcdd2" /* light pink color */,
    },
    secondary: {
      main: "#6d9c90" /* turquoise color */,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
