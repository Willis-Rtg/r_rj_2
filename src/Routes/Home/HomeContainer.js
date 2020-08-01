import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "@apollo/react-hooks";
import { ME } from "./HomeQueries";

const HomeContainer = () => {
  const [dataList, setDataList] = useState({});
  const [modal, setModal] = useState();
  const { mode, setMode } = useState();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const callApi = () => {};
  const { data: loginData, loading: loginLoading } = useQuery(ME);

  return (
    <HomePresenter
      callApi={callApi}
      dataList={dataList}
      modal={modal}
      openModal={openModal}
      closeModal={closeModal}
      loginData={loginData}
      loginLoading={loginLoading}
    />
  );
};

export default HomeContainer;
