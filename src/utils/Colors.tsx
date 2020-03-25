import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#46b562",
      dark: "#2ac552",
      contrastText: "#fff"
    }
  }
});
export default theme;
