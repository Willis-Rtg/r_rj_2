import React from "react";
import styled from "styled-components";
import Product from "../Product";
import Loader from "../Loader";

const Container = styled.div`
  display: flex;
  flex-wrap: row;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  padding-top: 20px;
`;
const ShowHide = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AdminBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  cursor: pointer;
  padding: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const ProductList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const SortedBrnad = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  border: 1px dotted
    ${(props) =>
      props.selectedBrand === "cu"
        ? "#0be881"
        : props.selectedBrand === "gs"
        ? "#18dcff"
        : props.selectedBrand === "seven"
        ? "#ff4d4d"
        : props.selectedBrand === "emart"
        ? "#ffd32a"
        : null};
  border-radius: 10px;
`;
const SortedBrandTitle = styled.div`
  font-size: 0.75rem;
  width: 100%;
  text-align: center;
  color: ${(props) =>
    props.selectedBrand === "cu"
      ? "#0be881"
      : props.selectedBrand === "gs"
      ? "#18dcff"
      : props.selectedBrand === "seven"
      ? "#ff4d4d"
      : props.selectedBrand === "emart"
      ? "#ffd32a"
      : null};
`;
const LoaderWrapper = styled.div`
  width: 100%;
  padding: 50px;
`;

export default ({
  selectedBrands,
  catchData,
  insertData,
  deleteHandler,
  mode,
  apiData,
  products,
  sortedProd,
  productsLoading,
  edit,
  setEdit,
  editMode,
}) => {
  let prodProps;
  const setProdProps = (name, img, event, price) => {
    prodProps = { name, img, event, price };
  };
  return (
    <Container>
      <ShowHide>
        {mode !== "USER" && (
          <AdminBtns>
            <div style={{ display: "flex" }}>
              <Button onClick={() => insertData()}>insert</Button>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "5px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Products : </p>
                <Button onClick={() => console.log("cu")}>cu</Button>
                <Button onClick={() => console.log("gs")}>gs</Button>
                <Button onClick={() => console.log("seven")}>seven</Button>
                <Button onClick={() => console.log("emart")}>emart</Button>
              </div>
            </div>
            <Button onClick={editMode}>{edit}</Button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>Delete : </p>
              <Button onClick={() => deleteHandler()}>All</Button>
              <Button onClick={() => deleteHandler("cu")}>Cu</Button>
              <Button onClick={() => deleteHandler("gs")}>Gs</Button>
              <Button onClick={() => deleteHandler("seven")}>Seven</Button>
              <Button onClick={() => deleteHandler("emart")}>emart</Button>
            </div>
          </AdminBtns>
        )}
        {apiData?.loading && <Loader />}
      </ShowHide>
      <ProductListWrapper>
        <ProductList>
          {mode === "USER" &&
            selectedBrands.map((selectedBrand, index) => {
              return (
                <SortedBrnad key={index} selectedBrand={selectedBrand}>
                  <SortedBrandTitle selectedBrand={selectedBrand}>
                    {selectedBrand}
                  </SortedBrandTitle>
                  {products?.products
                    ?.filter((product) => product.brand === selectedBrand)
                    ?.map((product, index) => {
                      return <Product {...product} key={index} />;
                    })}
                </SortedBrnad>
              );
            })}
          {mode === "ADMIN" &&
            apiData?.data?.map((item, index) => {
              apiData.brand === "gs" &&
                setProdProps(
                  item.goodsNm,
                  item.attFileNm,
                  item.eventTypeNm,
                  item.price
                );
              apiData.brand === "cu" &&
                setProdProps(
                  item.querySelector(".prodName a")?.textContent,
                  item.querySelector("img")?.getAttribute("src"),
                  item.querySelector("ul li")?.textContent,
                  item.querySelector(".prodPrice")?.textContent
                );
              apiData.brand === "seven" &&
                setProdProps(
                  item.querySelector(".name")?.textContent,
                  "https://7-eleven.co.kr" +
                    item.querySelector("img")?.getAttribute("src"),
                  item.querySelector(".tag_list_01")?.textContent,
                  item.querySelector(".price")?.textContent
                );
              apiData.brand === "emart" &&
                setProdProps(
                  item.querySelector(".productDiv")?.textContent,
                  "https://www.emart24.co.kr/" +
                    item.querySelector(".productImg img")?.getAttribute("src"),
                  item
                    .querySelector(".lable img")
                    ?.getAttribute("alt")
                    .substr(0, 5),
                  item.querySelector(".price")?.textContent
                );
              return <Product key={index} {...prodProps} />;
            })}
        </ProductList>
      </ProductListWrapper>
    </Container>
  );
};
