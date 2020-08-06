import React, { useEffect } from "react";
import HeaderPresenter from "./HeaderPresenter";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { LOCAL_LOG_OUT } from "./HeaderQueries";

export default ({ modal, openModal, closeModal, loginData, mode, setMode }) => {
  const changeMode = (e) => {
    e.preventDefault();
    if (mode === "USER") setMode("ADMIN");
    if (mode === "ADMIN" || mode === "MANAGER") setMode("USER");
  };
  const [localLogout] = useMutation(LOCAL_LOG_OUT);

  const logoutHandler = () => {
    localLogout();
    window.location.href = "/";
    return;
  };
  const props = {
    modal,
    openModal,
    closeModal,
    loginData,
    mode,
    changeMode,
    logoutHandler,
  };
  return <HeaderPresenter {...props} />;
};
