import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../Routes/Home";
import Admin from "../Routes/Admin";

const LogIn = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect path="*" to="/" />
  </Switch>
);
const LogOut = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Admin} />
    <Redirect path="*" to="/" />
  </Switch>
);
const Routes = ({ isLogIn }) => (isLogIn ? <LogIn /> : <LogOut />);

Routes.propTypes = {
  isLogIn: PropTypes.bool.isRequired,
};

export default Routes;
