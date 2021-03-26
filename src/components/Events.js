import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
`;
const Event = styled.div`
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

const Events = ({ onEvent }) => {
  return (
    <Container>
      <Event className="event onEvent" onClick={(e) => onEvent(e, 0)}>
        All
      </Event>
      <Event className="event" onClick={(e) => onEvent(e, 1)}>
        1+1
      </Event>
      <Event className="event" onClick={(e) => onEvent(e, 2)}>
        2+1
      </Event>
      <Event className="event" onClick={(e) => onEvent(e, 3)}>
        Etc
      </Event>
    </Container>
  );
};

export default Events;
