import React from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
// import Admin from "../Routes/Admin";
import { useQuery } from "@apollo/react-hooks";
import { LOCAL_LOGIN } from "../Apollo/localQueries";

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

const Routes = () => <LogIn />;

export default Routes;
