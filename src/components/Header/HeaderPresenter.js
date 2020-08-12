import React from "react";
import styled from "styled-components";
import Modal from "..//Modal/Modal";
import Portal from "..//Modal/Portal";
import Login from "../../assets/Login";
import Logout from "../../assets/Logout";

const Conatiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2px 0;
  /* flex: 1; */
`;
const AppTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  position: relative;
  width: 100%;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 800;
`;
const LoginWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 33px;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  background-color: inherit;
  border: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  z-index: 10;
`;
const ModeButton = styled.div`
  position: absolute;
  margin-left: 20px;
  left: 10;
  z-index: 5;
`;

export default ({
  modal,
  openModal,
  closeModal,
  loginData,
  mode,
  changeMode,
  logoutHandler,
}) => {
  return (
    <Conatiner>
      {(loginData?.me.role === "ADMIN" || loginData?.me.role === "MANAGER") && (
        <ModeButton>
          <Button onClick={changeMode}>{mode}</Button>
        </ModeButton>
      )}
      <AppTitle>
        <Title> 알뜰.편 </Title>
        <LoginWrapper>
          <Button onClick={loginData ? logoutHandler : openModal}>
            {loginData ? <Logout /> : <Login />}
          </Button>
        </LoginWrapper>
      </AppTitle>
      <div id="modal"></div>
      {modal && (
        <Portal>
          <Modal closeModal={closeModal} />
        </Portal>
      )}
    </Conatiner>
  );
};
