import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import { ME } from "./HomeQueries";
import getConvenience from "../../api/api";

const USER_ROLE = "USER";
const ADMIN_ROLE = "ADMIN";

const HomeContainer = () => {
  const { data: loginData, loading: loginLoading } = useQuery(ME);
  console.log("HomeContainer -> loginData", loginData);
  const [mode, setMode] = useState(USER_ROLE);

  const [selectedBrands, setSelectedBrands] = useState(["cu"]);
  const toggleBrand = (e, brandname) => {
    e.target.classList.toggle("onBrand");
    let index = selectedBrands?.indexOf(brandname);
    console.log("toggleBrand -> index", index);
    index <= -1
      ? setSelectedBrands((selectedBrands) => [...selectedBrands, brandname])
      : setSelectedBrands(() => {
          console.log("겹침");
          return selectedBrands.filter(
            (selectedBrand) => selectedBrand !== brandname
          );
        });
  };

  const [apiData, setApiData] = useState({
    data: [],
    loading: false,
    brand: "",
  });

  const callApi = async (brand) => {
    console.log("App -> brand", brand);
    setApiData({ loading: true });
    if (brand === "cu")
      setApiData({ data: await getConvenience.cu(), loading: false, brand });
    if (brand === "gs")
      setApiData({ data: await getConvenience.gs(), loading: false, brand });
    if (brand === "seven")
      setApiData({ data: await getConvenience.seven(), loading: false, brand });
    if (brand === "emart")
      setApiData({ data: await getConvenience.emart(), loading: false, brand });
  };

  function onCategory(Index) {
    console.log(Index);
  }

  const [modal, setModal] = useState();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const props = {
    modal,
    openModal,
    closeModal,
    loginData,
    loginLoading,
    callApi,
    apiData,
    mode,
    setMode,
    toggleBrand,
    selectedBrands,
    onCategory,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
