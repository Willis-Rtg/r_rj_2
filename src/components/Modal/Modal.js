import React, { useState } from "react";
import styled from "styled-components";
import SocialBtns from "./SocialBtns";
import Login from "../Auth/Login/Login";
import Join from "../Auth/Join/Join";
import { ToastContainer, toast } from "react-toastify";
import useInput from "../../Hooks/useInput";

const ModalBg = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem;
  width: 21%;
  min-width: 260px;
  background-color: white;
  border-radius: 17px;
`;
const ModalHeader = styled.div`
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 5px;
  position: relative;
  font-size: 18px;
  display: flex;
  justify-content: center;
`;
const ModalTitle = styled.div``;
const CloseBtn = styled.button`
  position: absolute;
  top: -13px;
  right: 0px;
  border: 0;
  font-size: 17px;
  border-radius: 20px;
`;
const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7px;
`;
const Button = styled.button`
  border: 0;
  background-color: inherit;
  font-size: 14px;
  margin-bottom: 5px;
`;
const ForLogin = styled.p`
  color: skyblue;
`;

const Modal = ({ closeModal }) => {
  const email = useInput("");
  const name = useInput("");
  const secret = useInput("");
  const [action, setAction] = useState(true);
  const loginProps = { email, secret };
  const joinProps = { email, name, setAction };
  return (
    <ModalBg>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>{action ? "로그인" : "회원가입"}</ModalTitle>
          <CloseBtn onClick={closeModal}>X</CloseBtn>
        </ModalHeader>
        <ModalContent>
          {action ? <Login {...loginProps} /> : <Join {...joinProps} />}
          {
            <Button onClick={() => setAction(action ? false : true)}>
              <ForLogin>{action ? "Join" : "Login"}</ForLogin>
            </Button>
          }
          <SocialBtns />
        </ModalContent>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
      </ModalWrapper>
    </ModalBg>
  );
};

export default Modal;
