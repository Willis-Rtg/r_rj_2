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
  z-index: 0;
  /* background-color: lightblue; */
`;
const Category = styled.div`
  &:hover {
    opacity: 0.5;
  }
  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  border-radius: 50px;
  z-index: 10;
`;

const HomePresenter = ({
  loginModal,
  setLoginModal,
  loginData,
  loginLoading,
  mode,
  callApi,
  apiData,
  setMode,
  toggleBrand,
  selectedBrands,
  selectedCategory,
  onCategory,
  selectedEvent,
  setSelectedEvent,
}) => {
  return (
    <Conatiner>
      {loginLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            loginModal={loginModal}
            setLoginModal={setLoginModal}
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
              <Category
                className="category"
                onClick={(e) => onCategory(e, index)}
              >
                <CategoryIcon key={index} />
              </Category>
            ))}
          </Categories>
          <Events setSelectedEvent={setSelectedEvent} />
          <ProductList
            selectedBrands={selectedBrands}
            mode={mode}
            apiData={apiData}
            selectedCategory={selectedCategory}
            selectedEvent={selectedEvent}
          />
        </>
      )}
    </Conatiner>
  );
};

export default HomePresenter;
