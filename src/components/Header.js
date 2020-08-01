import React from "react";
import styled from "styled-components";
import Login from "../assets/Login";
import Modal from "../Components/Modal/Modal";
import Portal from "../Components/Modal/Portal";

const Conatiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
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
  margin-left: 20px;
`;

const Header = ({ modal, openModal, closeModal, loginData }) => {
  const changeMode = (e) => {
    e.preventDefault();
    let buttonText = e.target.innerHTML;
    if (buttonText === "User") e.target.innerHTML = "Admin";
    if (buttonText === "Admin") e.target.innerHTML = "User";
  };
  return (
    <Conatiner>
      {loginData && (
        <ModeButton>
          <Button onClick={changeMode}>User</Button>
        </ModeButton>
      )}
      <AppTitle>
        <Title> 알뜰.편 </Title>
        <LoginWrapper>
          <Button onClick={openModal}>
            <Login />
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

export default Header;
