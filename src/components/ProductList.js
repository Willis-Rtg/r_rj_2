import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export default ({ Brand, DataList }) => {
  console.log("DataList", DataList);
  console.log("brand", Brand);
  let props;
  const setProps = (name, img, event, price) => {
    return (props = { name, img, event, price });
  };
  return (
    <Container>
      {DataList?.map((item, index) => {
        if (Brand === "gs")
          setProps(item.goodsNm, item.attFileNm, item.eventTypeNm, item.price);
        else if (Brand === "cu")
          setProps(
            item.querySelector(".prodName a")?.textContent,
            item.querySelector("img")?.getAttribute("src"),
            item.querySelector("ul li")?.textContent,
            item.querySelector(".prodPrice")?.textContent
          );
        else if (Brand === "seven")
          setProps(
            item.querySelector(".name")?.textContent,
            "https://7-eleven.co.kr" +
              item.querySelector("img")?.getAttribute("src"),
            item.querySelector(".ico_tag_07")?.textContent,
            item.querySelector(".price")?.textContent
          );
        else if (Brand === "emart")
          setProps(
            item.querySelector(".productDiv")?.textContent,
            "https://www.emart24.co.kr/" +
              item.querySelector(".productImg img")?.getAttribute("src"),
            item.querySelector(".lable img")?.getAttribute("alt").substr(0, 5),
            item.querySelector(".price")?.textContent
          );
        return <Product key={index} {...props} />;
      })}
    </Container>
  );
};
