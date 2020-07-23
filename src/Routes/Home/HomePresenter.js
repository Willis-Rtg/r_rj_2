import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import BrandLogos from "../../Components/BrandLogos";
import CategoryIcons from "../../Components/CategoryIcons";
import Events from "../../Components/Events";
import ProductList from "../../Components/Product/ProductList";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;
const Conatiner = styled.div`
  width: 550px;
  position: relative;
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

const HomePresenter = ({
  brand,
  dataList,
  callApi,
  modal,
  openModal,
  closeModal,
}) => {
  return (
    <AppContainer>
      <Conatiner>
        <Header modal={modal} openModal={openModal} closeModal={closeModal} />
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
        <ProductList />
      </Conatiner>
    </AppContainer>
  );
};

export default HomePresenter;
