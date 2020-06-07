import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: { // works
          main: '#12dacc',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#123acd',
          contrastText: '#fff',
        },
      }
    }
  );
export default theme;
