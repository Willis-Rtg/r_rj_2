import React from "react";
import styled from "styled-components";

// const { width, height } = Dimension;

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
  width: 22%;
  min-width: 260px;
  background-color: white;
  border-radius: 17px;
`;
const ModalHeader = styled.div`
  width: 100%;
  padding: 8px 10px;
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
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12.5px;
`;
const Input = styled.input`
  width: 75%;
  margin: 3px 0;
`;
const SocialBtns = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
`;

const Modal = ({ closeModal }) => {
  return (
    <ModalBg>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>회원가입</ModalTitle>
          <CloseBtn onClick={closeModal}>X</CloseBtn>
        </ModalHeader>
        <ModalContent>
          <Form>
            <Input placeholder="닉네임" />
            <Input placeholder="이메일" />
            <Input placeholder="비밀번호" />
            <Input placeholder="비밀먼호 확인" />
            <button type="submit">submit</button>
          </Form>
          Login
          <SocialBtns>
            <img
              width="35"
              height="35"
              src={require("../../assets/social-logos/small-naver.png")}
              alt="Naver login"
            />
            <img
              width="35"
              height="35"
              src={require("../../assets/social-logos/small-google.png")}
              alt="Google login"
            />
            <img
              width="35"
              height="35"
              src={require("../../assets/social-logos/small-facebook.png")}
              alt="Facebook login"
            />
            <img
              width="35"
              height="35"
              src={require("../../assets/social-logos/small-kakao2.png")}
              alt="Kakao login"
            />
          </SocialBtns>
        </ModalContent>
      </ModalWrapper>
    </ModalBg>
  );
};

export default Modal;
