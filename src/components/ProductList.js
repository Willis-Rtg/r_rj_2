import React from "react";
import styled from "styled-components";
// import Product from "./Product";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: string!
    $brand: string!
    $event: string!
    $img: string
    $price: string!
    $category: string
    $description: string
  ) {
    createProduct(
      name: $name
      brand: $brand
      event: $event
      img: $img
      price: $price
      category: $category
      description: $description
    )
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Product = styled.div`
  width: 70px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid black;
`;

const ProdName = styled.p`
  font-size: 12.5px;
`;
const ProdImg = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 50px;
  height: 50px;
`;
const ProdCate = styled.p`
  font-size: 12.5px;
`;
const Button = styled.button``;

export default ({ Brand: brand, DataList }) => {
  console.log("brand", brand);
  let props;
  let brnad, name, img, event, price, category, description;
  let info;
  const setProps = (name, img, event, price) => {
    console.log("setProps -> name", name);
    return name, img, event, price;
  };

  const { createProduct } = useMutation(CREATE_PRODUCT, {
    variables: {
      brnad,
      name,
      event,
      img,
      price,
      category,
      description,
    },
  });
  return (
    <Container>
      <Button onClick={() => createProduct()}>insert</Button>
      {DataList?.map((item, index) => {
        brand === "gs" &&
          setProps(item.goodsNm, item.attFileNm, item.eventTypeNm, item.price);

        brand === "cu" &&
          setProps(
            item.querySelector(".prodName a")?.textContent,
            item.querySelector("img")?.getAttribute("src"),
            item.querySelector("ul li")?.textContent,
            item.querySelector(".prodPrice")?.textContent
          );
        brand === "seven" &&
          setProps(
            item.querySelector(".name")?.textContent,
            "https://7-eleven.co.kr" +
              item.querySelector("img")?.getAttribute("src"),
            item.querySelector(".ico_tag_07")?.textContent,
            item.querySelector(".price")?.textContent
          );
        brand === "emart" &&
          setProps(
            item.querySelector(".productDiv")?.textContent,
            "https://www.emart24.co.kr/" +
              item.querySelector(".productImg img")?.getAttribute("src"),
            item.querySelector(".lable img")?.getAttribute("alt").substr(0, 5),
            item.querySelector(".price")?.textContent
          );
        return (
          <Product key={index}>
            <ProdName>{name}</ProdName>
            <ProdImg src={img} />
            <ProdCate>{event}</ProdCate>
            <>{price}</>
          </Product>
        );
      })}
    </Container>
  );
};
