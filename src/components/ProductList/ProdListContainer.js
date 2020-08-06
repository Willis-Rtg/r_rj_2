import React from "react";
import ProdListPresenter from "./ProdListPresenter";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_PRODUCT } from "./ProdListQueries";
import { DELETE_PRODUCTS } from "./ProdListQueries";

export default ({ dataList = [], brand, mode }) => {
  console.log("dataList", dataList);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [deleteProducts] = useMutation(DELETE_PRODUCTS);
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
    console.log("Start insert");
    productsInfo = document.getElementsByClassName("product");
    for (let item of productsInfo) {
      name = item.querySelector(".name").textContent;
      event = item.querySelector(".event").textContent;
      price = item.querySelector(".price").textContent;
      img = item.querySelector(".img").getAttribute("src");
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

  const deleteHandler = async () => {
    let test = await deleteProducts();
    console.log("deleteHandler -> test", await deleteProducts());
  };

  const prodListProps = {
    dataList,
    brand,
    catchData,
    insertData,
    deleteHandler,
    mode,
  };
  return <ProdListPresenter {...prodListProps} />;
};
