import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 68px;
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* border: 1px solid black; */
  &:hover {
    transform: scale(1.2);
  }
`;
const Name = styled.div`
  display: flex;
  width: 90%;
  font-size: 12.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  scrollbar-width: none;
  white-space: nowrap;
  font-weight: 500;
`;
const Tooltip = styled.div`
  visibility: hidden;
  position: absolute;
  background: grey;
  color: white;
  border-radius: 4px;
  padding: 5px 0;
  &:hover {
    visibility: visible;
  }
`;
const Img = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 52px;
  height: 52px;
`;
const Event = styled.p`
  font-size: 12.5px;
`;
const Price = styled.p`
  font-size: 12.5px;
`;

export default ({ name, img, event, price }) => {
  return (
    <Container className="product">
      <Name className="name">{name}</Name>
      <Tooltip>{name}</Tooltip>
      <Img className="img" src={img} alt={name} />
      <Event className="event">{event}</Event>
      <Price className="price">{price}</Price>
    </Container>
  );
};
