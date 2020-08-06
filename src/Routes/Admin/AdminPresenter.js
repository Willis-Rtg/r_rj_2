import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import BrandLogos from "../../Components/BrandLogos";
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Brands = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 18.5px;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  /* background-color: lightblue; */
`;

const Admin = ({ brand, dataList, callApi }) => {
  return (
    <AppContainer>
      <Conatiner>
        <Header />
        <Brands>
          {BrandLogos?.map((Brand, index) => (
            <Brand key={index} onClick={() => callApi(index)} />
          ))}
        </Brands>
        <Categories>
          {CategoryIcons?.map((Type, index) => (
            <Type key={index}></Type>
          ))}
        </Categories>
        <Events />
        admin
        <ProductList dataList={dataList} brand={brand} />
      </Conatiner>
    </AppContainer>
  );
};

export default Admin;
