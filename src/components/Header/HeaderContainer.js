import React from "react";
import HeaderPresenter from "./HeaderPresenter";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { LOCAL_LOG_OUT } from "./HeaderQueries";
import { ME } from "../../Routes/Home/HomeQueries";

export default ({ loginModal, setLoginModal, mode, setMode }) => {
  const { data: loginData } = useQuery(ME);
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
    loginModal,
    setLoginModal,
    loginData,
    mode,
    changeMode,
    logoutHandler,
  };
  return <HeaderPresenter {...props} />;
};
