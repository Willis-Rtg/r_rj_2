import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 70px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid black;
`;
const Name = styled.p`
  font-size: 12.5px;
`;
const Img = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 50px;
  height: 50px;
`;
const Event = styled.p`
  font-size: 12.5px;
`;
const Price = styled.p``;

export default ({ name, img, event, price }) => {
  // console.log("name, img, event, price", name, img, event, price);
  return (
    <Container className="product">
      <Name className="name">{name}</Name>
      <Img className="img" src={img} />
      <Event className="event">{event}</Event>
      <Price className="price">{price}</Price>
    </Container>
  );
};
