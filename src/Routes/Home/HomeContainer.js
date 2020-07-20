import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import useInput from "../../Hooks/useInput";

const HomeContainer = () => {
  const [dataList, setDataList] = useState({});
  const callApi = () => {};
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const email = useInput("");

  return (
    <HomePresenter
      callApi={callApi}
      dataList={dataList}
      modalVisible={modalVisible}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
};

export default HomeContainer;
