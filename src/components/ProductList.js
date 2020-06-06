import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_PRODUCT } from "../Routes/Admin/AdminQueries";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button``;

export default ({ dataList, brand }) => {
  let props;
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const setProps = (name, img, event, price) => {
    props = { name, img, event, price };
  };
  let productsInfo;
  let name, event, price, img;

  const catchData = () => {
    productsInfo = document.getElementsByClassName("product");
    for (let item of productsInfo) {
      img = item.querySelector(".img").getAttribute("src");
      console.log("catchData -> img", img);
    }
  };

  const insertData = async () => {
    productsInfo = document.getElementsByClassName("product");
    console.log("insert");
    for (let item of productsInfo) {
      name = item.querySelector(".name").textContent;
      event = item.querySelector(".event").textContent;
      price = item.querySelector(".price").textContent;
      img = item.querySelector(".img").getAttribute("src");

      // console.log("insertData -> name", name);
      // console.log("insertData -> event", event);
      // console.log("insertData -> price", price);
      try {
        const newProduct = await createProduct({
          variables: {
            name,
            brand,
            event,
            price,
            img,
            category: "",
            description: "",
          },
        });
        console.log("insertData -> newProduct", newProduct);
      } catch (error) {
        console.log("error :", error);
      }
    }
    console.log("Insert Done.");
  };

  return (
    <Container>
      <Button onClick={() => catchData()}>catch Data</Button>
      <Button onClick={() => insertData()}>insert</Button>
      {dataList?.map((item, index) => {
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
        return <Product key={index} {...props}></Product>;
      })}
    </Container>
  );
};
