import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import { ME } from "./HomeQueries";

const HomeContainer = () => {
  const { data: loginData, loading: loginLoading } = useQuery(ME);
  const [mode, setMode] = useState("USER");

  const [selectedBrands, setSelectedBrands] = useState([]);
  const toggleBrand = (e, brandname) => {
    e.target.classList.toggle("onBrand");
    let index = selectedBrands?.indexOf(brandname);
    let newBrands;
    index === -1
      ? (newBrands = selectedBrands.push(brandname))
      : (newBrands = selectedBrands.splice(index, 1));
    console.log("toggleBrand -> selectedBrands", selectedBrands);
  };
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    console.log("get products");
  };
  // useEffect(() => getProducts, [selectedBrands]);

  const [modal, setModal] = useState();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const props = {
    modal,
    openModal,
    closeModal,
    loginData,
    loginLoading,
    mode,
    setMode,
    toggleBrand,
    selectedBrands,
    products,
    setProducts,
    getProducts,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
