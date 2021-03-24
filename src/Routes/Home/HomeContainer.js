import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import { ME } from "./HomeQueries";
import getConvenience from "../../api/api";

const USER_ROLE = "USER";
// const ADMIN_ROLE = "ADMIN";

const HomeContainer = () => {
  const { data: loginData, loading: loginLoading } = useQuery(ME);
  const [mode, setMode] = useState(USER_ROLE);
  const [selectedBrands, setSelectedBrands] = useState(["cu"]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(0);

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
  const onCategory = (e, index) => {
    setSelectedCategory(index);
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

  const [loginModal, setLoginModal] = useState(false);

  const props = {
    loginModal,
    setLoginModal,
    loginData,
    loginLoading,
    callApi,
    apiData,
    mode,
    setMode,
    toggleBrand,
    selectedBrands,
    selectedCategory,
    onCategory,
    selectedEvent,
    setSelectedEvent,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
