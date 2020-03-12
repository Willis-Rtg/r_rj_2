import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-around;
`;
const Text = styled.Text`
  padding-horizontal: 20px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 14px;
`;

const Events = () => {
  return (
    <Container>
      <Text>1+1</Text>
      <Text>2+1</Text>
      <Text>3+1</Text>
    </Container>
  );
};

export default Events;
