import * as React from "react";
import StylesProvider from "@material-ui/styles/StylesProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const ThemeProviderComponent = (props) => {
  const { children } = props;

  return (
    <StylesProvider injectFirst>
      <AppBar position="absolute" color="primary" style={{ height: "50px" }}>
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" color="inherit" style={{ height: "50px" }}>
            React Filter
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </StylesProvider>
  );
};
