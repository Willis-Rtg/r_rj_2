import React, { useState } from "react";
import styled from "styled-components";
import Product from "../Product";
import Loader from "../Loader";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const ShowHide = styled.div`
  top: 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export default ({
  catchData,
  insertData,
  deleteHandler,
  mode,
  apiData,
  products,
  productsLoading,
  edit,
  setEdit,
  editMode,
}) => {
  console.log("products", products);
  console.log("productsLoading", productsLoading);
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
      {productsLoading === true && <Loader />}
      {mode === "USER" &&
        products?.products?.map((product, index) => {
          console.log("product", product);
          return <Product key={index} {...product} />;
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
    </Container>
  );
};
