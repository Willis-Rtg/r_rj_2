import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BrandList from "../components/BrandList";
import BrandLogos from "../components/BrandLogos";
import Category from "../components/Category";
import CategoryIcons from "../components/CategoryIcons";
import Events from "../components/Events";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Conatiner = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Footer = styled.section``;

function App() {
  return (
    <AppContainer>
      <Conatiner>
        <Header />
        <BrandList BrandLogos={BrandLogos} />
        <Category CategoryIcons={CategoryIcons} />
        <Events />
        <Footer>Footer</Footer>
      </Conatiner>
    </AppContainer>
  );
}

export default App;
