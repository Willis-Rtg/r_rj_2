import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import "../Styles/App.css";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1;
  height: 100%;
`;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppWrapper>
        <Router>
          <Routes />
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};
