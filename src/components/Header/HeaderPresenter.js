import React from "react";
import styled from "styled-components";
import LoginModal from "../Modal/LoginModal";
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
  font-family: "Gugi", cursive;
`;
const Title = styled.h3`
  font-size: 1.74em;
  font-weight: 500;
`;
const LoginWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 33px;
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
const Button = styled.button`
  background-color: inherit;
  border: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const ModeButton = styled.div`
  position: absolute;
  margin-left: 20px;
  left: 10;
  z-index: 5;
`;

export default ({
  loginModal,
  setLoginModal,
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
          <Button
            onClick={loginData ? logoutHandler : () => setLoginModal(true)}
          >
            {loginData ? <Logout /> : <Login />}
          </Button>
        </LoginWrapper>
      </AppTitle>
      {loginModal && <LoginModal setLoginModal={setLoginModal}></LoginModal>}
    </Conatiner>
  );
};
