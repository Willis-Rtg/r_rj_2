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
  /* border: 1px solid gray; */
  padding: 2px 7px;
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Events = ({ setSelectedEvent }) => {
  return (
    <Container>
      <Text onClick={() => setSelectedEvent(0)}>All</Text>
      <Text onClick={() => setSelectedEvent(1)}>1+1</Text>
      <Text onClick={() => setSelectedEvent(2)}>2+1</Text>
      <Text onClick={() => setSelectedEvent(3)}>Etc</Text>
    </Container>
  );
};

export default Events;
