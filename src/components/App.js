import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: cetner;
  align-items: stretch;
  flex: 1;
  max-width: ${(props) => props.theme.maxWidth};
`;

const Query = gql`
  {
    isLogIn @client
  }
`;

export default () => {
  const {
    data: { isLogIn },
  } = useQuery(Query);
  console.log("isLogIn", isLogIn);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppWrapper>
        <Router>
          <Routes isLogIn={isLogIn} />
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};
