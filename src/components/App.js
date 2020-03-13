import React from "react";
import styled from "styled-components";
import Header from "./Header";
import BrandList from "./BrandList";
import Category from "./Category";
import { Cu, Gs, Seven, Emart } from "./ConvLogos";
import {
  Breakfast,
  Icecream,
  Chip,
  Lemonade,
  Soap,
  Tissue,
  Candy
} from "./CategoryIcons";
// import Events from "../components/Events";

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
// const Header = styled.section``;
const Body = styled.section``;
const Footer = styled.section``;

function App() {
  return (
    <AppContainer>
      <Conatiner>
        <Header />
        <BrandList Brands={[Cu, Gs, Seven, Emart]} />
        <Category
          Categories={[
            Breakfast,
            Icecream,
            Chip,
            Lemonade,
            Soap,
            Tissue,
            Candy
          ]}
        />
        <Footer>Footer</Footer>
      </Conatiner>
    </AppContainer>
  );
}

export default App;
