import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
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
      <Wrapper>
        <Router>
          <Routes isLogIn={isLogIn} />
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
};
