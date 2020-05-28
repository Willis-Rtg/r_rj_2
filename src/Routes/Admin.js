import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import BrandList from "../Components/BrandList";
import BrandLogos from "../Components/BrandLogos";
import Category from "../Components/Category";
import CategoryIcons from "../Components/CategoryIcons";
import Events from "../Components/Events";
import getConvenience from "../api/api";
import ProductList from "../Components/ProductList";

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

const Admin = () => {
  const [data, setData] = useState({ list: [], brand: "" });

  const callApi = async (brand) => {
    console.log("App -> brand", brand);
    if (brand === 0) setData({ list: await getConvenience.cu(), brand: "cu" });
    if (brand === 1) setData({ list: await getConvenience.gs(), brand: "gs" });
    if (brand === 2)
      setData({ list: await getConvenience.seven(), brand: "seven" });
    if (brand === 3)
      setData({ list: await getConvenience.emart(), brand: "emart" });
  };

  return (
    <AppContainer>
      <Conatiner>
        <Header />
        <BrandList BrandLogos={BrandLogos} callApi={callApi} />
        <Category CategoryIcons={CategoryIcons} />
        <Events />
        <ProductList Brand={data.brand} DataList={data.list}></ProductList>
      </Conatiner>
    </AppContainer>
  );
};

export default Admin;
