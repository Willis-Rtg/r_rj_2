import React from "react";
import styled from "styled-components";

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
  z-index: 10;
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
const ModalTitle = styled.div`
  text-align: center;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: -13px;
  right: 0px;
  border: 0;
  font-size: 17px;
  border-radius: 20px;
  background-color: white;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7px;
  position: relative;
`;
const Img = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  min-width: 200px;
  min-height: 200px;
`;
const Event = styled.div`
  font-size: 0.9rem;
  margin: 0.5rem;
`;
const Price = styled.div`
  font-size: 1rem;
`;
// const Detail = styled.div`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   font-size: 0.45rem;
//   color: #3498db;
// `;

const ProductModal = ({ setProductModal, clickedProps }) => {
  return (
    <ModalBg>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>{clickedProps.clickedName}</ModalTitle>
          <CloseBtn onClick={() => setProductModal(false)}>X</CloseBtn>
        </ModalHeader>
        <ModalContent>
          <Img src={clickedProps.clickedImg} />
          <Event>{clickedProps.clickedEvent}</Event>
          <Price>{clickedProps.clickedPrice}</Price>
          {/* <Detail>자세히 보기...</Detail> */}
        </ModalContent>
      </ModalWrapper>
    </ModalBg>
  );
};

export default ProductModal;
