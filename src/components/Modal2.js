import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Modal = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalHeader = styled.div`
  background-color: pink;
  height: 15%;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const Modal2 = ({ className, visible, children }) => (
  <>
    <ModalOverlay visible={visible} />
    <Modal className={className} tabIndex="-1" visible={visible}>
      <ModalHeader></ModalHeader>
      <ModalInner tabIndex="0" className="modal-inner">
        {children}
      </ModalInner>
    </Modal>
  </>
);

Modal2.propTypes = {
  visible: PropTypes.bool,
};

export default Modal2;
