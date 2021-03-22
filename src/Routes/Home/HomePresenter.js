import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BrandLogos from "../../components/BrandLogos";
import CategoryIcons from "../../components/CategoryIcons";
import Events from "../../components/Events";
import ProductList from "../../components/ProductList";
import Loader from "../../components/Loader";

const Conatiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  min-width: 550px;
`;
const Brands = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`;
const BrandLogo = styled.div`
  border-radius: 10px;
  z-index: 30;
  &:hover {
    opacity: 0.5;
  }
  & > svg {
    pointer-events: none;
  }
`;
const Categories = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  /* background-color: lightblue; */
`;
const Category = styled.div`
  &:hover {
    opacity: 0.5;
  }
`;

const HomePresenter = ({
  modal,
  openModal,
  closeModal,
  loginData,
  loginLoading,
  mode,
  callApi,
  apiData,
  setMode,
  toggleBrand,
  selectedBrands,
  onCategory,
}) => {
  return (
    <Conatiner>
      {loginLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            modal={modal}
            openModal={openModal}
            closeModal={closeModal}
            loginData={loginData}
            mode={mode}
            setMode={setMode}
          />
          <Brands>
            {BrandLogos?.map((Brand, index) => {
              let brandname = Brand.name.toLowerCase();
              if (index === 0) brandname = "cu";
              if (index === 1) brandname = "gs";
              if (index === 2) brandname = "seven";
              if (index === 3) brandname = "emart";
              return (
                <BrandLogo
                  key={index}
                  onClick={(e) =>
                    mode === "USER"
                      ? toggleBrand(e, brandname)
                      : callApi(brandname)
                  }
                  className={index === 0 ? "onBrand" : null}
                >
                  <Brand />
                </BrandLogo>
              );
            })}
          </Brands>
          <Categories>
            {CategoryIcons?.map((CategoryIcon, index) => (
              <Category onClick={() => onCategory(index)}>
                <CategoryIcon key={index} />
              </Category>
            ))}
          </Categories>
          <Events />
          <ProductList
            selectedBrands={selectedBrands}
            mode={mode}
            apiData={apiData}
          />
        </>
      )}
    </Conatiner>
  );
};

export default HomePresenter;
