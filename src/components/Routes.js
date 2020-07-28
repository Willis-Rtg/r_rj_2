import React from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../Routes/Home";
import Admin from "../Routes/Admin";

const Ad = styled.div`
  flex: 1;
`;

const LogIn = () => (
  <>
    <Ad />
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
    <Ad />
  </>
);
const LogOut = () => (
  <>
    <Ad />
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
    <Ad />
  </>
);
const IsAdmin = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Admin} />
    <Redirect from="*" to="/" />
  </Switch>
);

const Routes = ({ isLogIn }) => (isLogIn ? <LogIn /> : <LogOut />);

Routes.propTypes = {
  isLogIn: PropTypes.bool.isRequired,
};

export default Routes;
