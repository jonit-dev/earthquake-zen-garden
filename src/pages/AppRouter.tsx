import { App } from "App";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
