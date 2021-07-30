import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import getConvenience from "../../api/api";

const USER_ROLE = "USER";
// const ADMIN_ROLE = "ADMIN";

const HomeContainer = () => {
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
    const catoegries =
      e.currentTarget.parentElement.querySelectorAll(".category");
    catoegries.forEach((category) => category.classList.remove("onCategory"));
    e.currentTarget.classList.add("onCategory");
    setSelectedCategory(index);
  };
  const onEvent = (e, index) => {
    const events = e.currentTarget.parentElement.querySelectorAll(".event");
    events.forEach((event) => event.classList.remove("onEvent"));
    e.currentTarget.classList.add("onEvent");
    setSelectedEvent(index);
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
    callApi,
    apiData,
    mode,
    setMode,
    toggleBrand,
    selectedBrands,
    selectedCategory,
    onCategory,
    selectedEvent,
    onEvent,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
