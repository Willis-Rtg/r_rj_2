import React, { useState } from "react";
import styled from "styled-components";
import Product from "../Product";
import Loader from "../Loader";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const ShowHide = styled.div`
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
}) => {
  let prodProps;
  const setProdProps = (name, img, event, price) => {
    prodProps = { name, img, event, price };
  };
  // const [props, setProps] = useState({
  //   name: null,
  //   img: null,
  //   event: null,
  //   price: null,
  // });
  return (
    <Container>
      <ShowHide>
        {mode !== "USER" && (
          <AdminBtns>
            <Button onClick={() => catchData()}>catch Data</Button>
            <Button onClick={() => insertData()}>insert</Button>
            <Button onClick={() => deleteHandler()}>All Delete</Button>
          </AdminBtns>
        )}
        {dataList?.loading && <Loader />}
      </ShowHide>
      {dataList?.list?.map((item, index) => {
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
            item.querySelector(".lable img")?.getAttribute("alt").substr(0, 5),
            item.querySelector(".price")?.textContent
          );
        return <Product key={index} {...prodProps}></Product>;
      })}
    </Container>
  );
};
