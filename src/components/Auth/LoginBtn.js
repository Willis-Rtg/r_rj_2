import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
// import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
// import { withNavigation } from "react-navigation";

const BtnContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: -5px;
  right: 10px;
  margin-right: 10px;
`;
const Text = styled.p`
  font-weight: 900;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3px 7px;
  margin: 0 1px;
  background-color: deepskyblue;
  border-radius: 5px;
  color: white;
  width: 49px;
`;

const LoginBtn = ({ navigation, modalVisible = false }) => (
  <BtnContainer>
    <Text>Login</Text>
    <Text>Join</Text>
  </BtnContainer>
);

export default LoginBtn;
