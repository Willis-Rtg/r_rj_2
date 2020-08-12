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
`;
const Button = styled.button``;

export default ({
  dataList,
  brand,
  mode,
  catchData,
  insertData,
  deleteHandler,
  apiData,
  loading,
  // prodProps,
  // setProdProps,
  edit,
  setEdit,
  editMode,
}) => {
  let prodProps;
  const setProdProps = (name, img, event, price) => {
    prodProps = { name, img, event, price };
    console.log("setProdProps -> prodProps", prodProps);
  };
  return (
    <Container>
      <ShowHide>
        {mode !== "USER" && (
          <AdminBtns>
            <Button onClick={() => catchData()}>catch Data</Button>
            <Button onClick={() => insertData()}>insert</Button>
            <Button onClick={() => deleteHandler()}>All Delete</Button>
            <Button onClick={() => deleteHandler("cu")}>Cu Delete</Button>
            <Button onClick={() => deleteHandler("gs")}>Gs Delete</Button>
            <Button onClick={() => deleteHandler("seven")}>Seven Delete</Button>
            <Button onClick={() => deleteHandler("emart")}>Emart Delete</Button>
            <Button onClick={editMode}>{edit}</Button>
          </AdminBtns>
        )}
        {dataList?.loading || (loading && <Loader />)}
      </ShowHide>
      {mode === "USER" &&
        apiData?.list?.map((product, index) => {
          console.log("product", product);

          return <Product key={index} {...product} />;
        })}
      {mode !== "USER" &&
        apiData?.list?.map((item, index) => {
          brand === "gs" &&
            setProdProps(
              item.goodsNm,
              item.attFileNm,
              item.eventTypeNm,
              item.price
            );
          brand === "cu" &&
            setProdProps(
              item.querySelector(".prodName a")?.textContent,
              item.querySelector("img")?.getAttribute("src"),
              item.querySelector("ul li")?.textContent,
              item.querySelector(".prodPrice")?.textContent
            );
          brand === "seven" &&
            setProdProps(
              item.querySelector(".name")?.textContent,
              "https://7-eleven.co.kr" +
                item.querySelector("img")?.getAttribute("src"),
              item.querySelector(".ico_tag_07")?.textContent,
              item.querySelector(".price")?.textContent
            );
          brand === "emart" &&
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
