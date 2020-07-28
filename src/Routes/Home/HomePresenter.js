import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import BrandLogos from "../../Components/BrandLogos";
import CategoryIcons from "../../Components/CategoryIcons";
import Events from "../../Components/Events";
import ProductList from "../../Components/Product/ProductList";

const Conatiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 550px;
`;
const Brands = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 18.5px;
`;
const BrandLogo = styled.div`
  border-radius: 10px;
  z-index: 20;
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
    <Conatiner>
      <Header modal={modal} openModal={openModal} closeModal={closeModal} />
      <Brands>
        {BrandLogos?.map((Brand, index) => (
          <BrandLogo key={index}>
            <Brand onClick={() => callApi(index)} />
          </BrandLogo>
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
  );
};

export default HomePresenter;
