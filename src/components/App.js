import React from "react";
import styled from "styled-components";
import Header from "./Header";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Conatiner = styled.div``;
// const Header = styled.section``;
const Body = styled.section``;
const Footer = styled.section``;

function App() {
  return (
    <AppContainer>
      <Conatiner>
        <Header>Header</Header>
        <Body>Body</Body>
        <Footer>Footer</Footer>
      </Conatiner>
    </AppContainer>
  );
}

export default App;
