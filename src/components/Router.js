import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../Routes/Home";
import Admin from "../Routes/Admin";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" component={Admin} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
