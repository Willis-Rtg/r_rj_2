import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [dataList, setDataList] = useState({});
  const [modal, setModal] = useState();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const callApi = () => {};

  return (
    <HomePresenter
      callApi={callApi}
      dataList={dataList}
      modal={modal}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
};

export default HomeContainer;
