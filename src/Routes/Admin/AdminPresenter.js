import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import BrandList from "../../Components/BrandList";
import BrandLogos from "../../Components/BrandLogos";
import Category from "../../Components/Category";
import CategoryIcons from "../../Components/CategoryIcons";
import Events from "../../Components/Events";
import ProductList from "../../Components/ProductList";

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

const Admin = ({ brand, dataList, callApi }) => {
  return (
    <AppContainer>
      <Conatiner>
        <Header />
        <BrandList BrandLogos={BrandLogos} callApi={callApi} />
        <Category CategoryIcons={CategoryIcons} />
        <Events />
        <ProductList dataList={dataList} brand={brand} />
      </Conatiner>
    </AppContainer>
  );
};

export default Admin;
