import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";

const Header: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
