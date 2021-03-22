import React, { useState, useEffect } from "react";
import ProdListPresenter from "./ProdListPresenter";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCTS,
} from "./ProdListQueries";
import { PRODUCTS } from "./ProdListQueries";

export default ({ selectedBrands, mode, apiData }) => {
  useEffect(() => console.log("selectedBrands", selectedBrands), [
    selectedBrands,
  ]);

  const [edit, setEdit] = useState(false);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [editProduct] = useMutation(UPDATE_PRODUCT);
  const { data: products, loading: productsLoading } = useQuery(PRODUCTS, {
    variables: { brand: selectedBrands },
  });
  const [deleteProducts] = useMutation(DELETE_PRODUCTS);

  const [sortedProd, setSortedProd] = useState({});

  useEffect(() => {
    setSortedProd({
      cu: products?.products?.filter((product) => product.brand === "cu"),
      gs: products?.products?.filter((product) => product.brand === "gs"),
      seven: products?.products?.filter((product) => product.brand === "seven"),
      emart: products?.products?.filter((product) => product.brand === "emart"),
    });
  }, [products]);

  let productsInfo;
  let name, event, price, img, id, category;

  const editProducts = async () => {
    console.log("Start edit");
    productsInfo = document.getElementsByClassName("product");
    for (let item of productsInfo) {
      id = item.querySelector(".id").textContent;
      let categorySelect = item.querySelector(".category");
      category = categorySelect.options[categorySelect.selectedIndex].value;
      try {
        const editedProd = await editProduct({ variables: { id, category } });
        console.log(" editedProd", editedProd);
      } catch (error) {
        console.log(error);
      }
    }
    console.log("Done edit");
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
            brand: apiData.brand,
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
  const deleteHandler = async (brand) => {
    let deielte = await deleteProducts({ variables: { brand } });
    console.log(" deleteHandler ~ deielte", deielte);
  };

  const prodListProps = {
    selectedBrands,
    insertData,
    deleteHandler,
    mode,
    apiData,
    products,
    sortedProd,
    productsLoading,
    edit,
    setEdit,
    editProducts,
  };
  return <ProdListPresenter {...prodListProps} />;
};
