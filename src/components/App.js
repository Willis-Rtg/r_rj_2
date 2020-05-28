import React from "react";
import Router from "./Router";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

const Wrapper = styled.div``;

export default () => (
  <ThemeProvider theme={Theme}>
    <Wrapper>
      <Router />
      <GlobalStyles />
    </Wrapper>
  </ThemeProvider>
);
