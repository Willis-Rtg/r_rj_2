import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BrandList from "../components/BrandList";
import BrandLogos from "../components/BrandLogos";
import Category from "../components/Category";
import CategoryIcons from "../components/CategoryIcons";
import Events from "../components/Events";
import getConvenience from "../api/api";
import ProductList from "../components/ProductList";

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

const Admin = () => {
  const [dataList, getData] = useState();

  const callApi = async (brand) => {
    console.log("App -> brand", brand);
    if (brand === 0) getData(await getConvenience.cu());
    if (brand === 1) getData(await getConvenience.gs());
    if (brand === 2) getData(await getConvenience.seven());
    if (brand === 3) getData(await getConvenience.emart());
  };
  if (dataList) {
    console.log("callApi -> dataList", dataList);
  }

  return (
    <AppContainer>
      <Conatiner>
        <Header />
        <BrandList BrandLogos={BrandLogos} callApi={callApi} />
        <Category CategoryIcons={CategoryIcons} />
        <Events />
        <Footer>Footer</Footer>
        <ProductList DataList={dataList}></ProductList>
      </Conatiner>
    </AppContainer>
  );
};

export default Admin;
