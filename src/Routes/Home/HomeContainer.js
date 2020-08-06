import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import { ME } from "./HomeQueries";
import getConvenience from "../../api/api";
// import { LOCAL_LOGIN } from "./HomeQueries";

const HomeContainer = () => {
  // const {
  //   data: { isLogIn },
  // } = useQuery(LOCAL_LOGIN);
  const { data: loginData, loading: loginLoading } = useQuery(ME);
  const [mode, setMode] = useState("USER");

  const [dataList, setDataList] = useState({
    list: [],
    loading: false,
    brand: "",
  });
  const callApi = async (brand, e) => {
    e.preventDefault();
    // e.target.setAttribute("disabled");
    setDataList({ loading: true });
    if (brand === 0)
      setDataList({
        list: await getConvenience.cu(),
        brand: "cu",
        loading: false,
      });
    if (brand === 1)
      setDataList({
        list: await getConvenience.gs(),
        brand: "gs",
        loading: false,
      });
    if (brand === 2)
      setDataList({
        list: await getConvenience.seven(),
        brand: "seven",
        loading: false,
      });
    if (brand === 3)
      setDataList({
        list: await getConvenience.emart(),
        brand: "emart",
        loading: false,
      });
  };

  const [modal, setModal] = useState();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const props = {
    callApi,
    dataList,
    modal,
    openModal,
    closeModal,
    loginData,
    loginLoading,
    mode,
    setMode,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
