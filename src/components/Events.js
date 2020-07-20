import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
`;
const Text = styled.div`
  padding-horizontal: 20px;
  font-size: 20px;
  border: 1px solid gray;
  padding: 2px 7px;
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
