import React, { useState } from "react";
import ProdListPresenter from "./ProdListPresenter";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_PRODUCT } from "./ProdListQueries";
import { DELETE_PRODUCTS } from "./ProdListQueries";
import { PRODUCTS } from "./ProdListQueries";
import getConvenience from "../../api/api";

export default ({ selectedBrands = [], mode }) => {
  console.log("selectedBrands", selectedBrands);
  // console.log("dataList", dataList);
  const [edit, setEdit] = useState("edit");
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [deleteProducts] = useMutation(DELETE_PRODUCTS);
  const { data, loading } = useQuery(PRODUCTS, {
    variables: { brand: selectedBrands },
  });
  // const [prodProps, setProdProps] = useState()

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
  console.log("editMode -> edit", edit);

  const deleteHandler = async (brand) => {
    let test = await deleteProducts({ variables: { brand } });
    console.log("deleteHandler -> test", test);
  };

  const [apiData, setApiData] = useState({
    list: [],
    loading: false,
    brand: "",
  });

  const callApi = async (brand) => {
    // e.preventDefault();
    // e.target.setAttribute("disabled");
    setApiData({ loading: true });
    if (brand.includes("cu"))
      setApiData({
        list: await getConvenience.cu(),
        brand: "cu",
        loading: false,
      });
    if (brand.includes("gs")) {
      setApiData({
        list: await getConvenience.gs(),
        brand: "gs",
        loading: false,
      });
      console.log("click gs");
    }
    if (brand === 2)
      setApiData({
        list: await getConvenience.seven(),
        brand: "seven",
        loading: false,
      });
    if (brand === 3)
      setApiData({
        list: await getConvenience.emart(),
        brand: "emart",
        loading: false,
      });
  };

  // useEffect(() => {
  //   callApi(selectedBrands);
  // }, [selectedBrands]);

  const prodListProps = {
    apiData,
    selectedBrands,
    catchData,
    insertData,
    deleteHandler,
    mode,
    loading,
    // prodProps,
    // setProdProps,
    edit,
    setEdit,
    editMode,
  };
  return <ProdListPresenter {...prodListProps} />;
};
