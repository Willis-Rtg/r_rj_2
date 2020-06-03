import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import BrandList from "../Components/BrandList";
import BrandLogos from "../Components/BrandLogos";
import Category from "../Components/Category";
import CategoryIcons from "../Components/CategoryIcons";
import Events from "../Components/Events";

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

function Home() {
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

export default Home;
