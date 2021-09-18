import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import { theme } from "../../utils/theme.utils";

const Header: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default Header;
