import React from "react";
import styled from "styled-components";
import Login from "../assets/Login";
import Modal from "../Components/Modal/Modal";
import Portal from "../Components/Modal/Portal";

const Conatiner = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  border: 0;
  background-color: inherit;
`;

const Header = ({ modal, openModal, closeModal }) => {
  return (
    <Conatiner>
      <AppTitle>
        <Title>알뜰.편</Title>
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
