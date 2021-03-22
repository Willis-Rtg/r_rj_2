import React, { useState, useEffect } from "react";
import ProdListPresenter from "./ProdListPresenter";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_PRODUCT } from "./ProdListQueries";
import { DELETE_PRODUCTS } from "./ProdListQueries";
// import { PRODUCTS } from "./ProdListQueries";

export default ({ selectedBrands, mode, apiData }) => {
  useEffect(() => console.log("Admin selectedBrands", selectedBrands), [
    selectedBrands,
  ]);

  const [edit, setEdit] = useState("edit");
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
            brand: selectedBrands[0],
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

  const editMode = async () => {
    edit === "edit" ? setEdit("none") : setEdit("edit");
  };

  const deleteHandler = async (brand) => {
    let test = await deleteProducts({ variables: { brand } });
    console.log("deleteHandler -> test", test);
  };

  // useEffect(() => callApi(selectedBrands[0]), [selectedBrands]);
  // useEffect(() => {
  //   callApi(selectedBrands);
  // }, [selectedBrands]);

  const prodListProps = {
    selectedBrands,
    catchData,
    insertData,
    deleteHandler,
    mode,
    apiData,
    edit,
    setEdit,
    editMode,
  };
  return <ProdListPresenter {...prodListProps} />;
};
