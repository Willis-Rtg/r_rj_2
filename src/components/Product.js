import React from "react";
import styled from "styled-components";

const Tooltip = styled.div`
  display: none;
  position: absolute;
  background: white;
  top: 5px;
  color: black;
  border-radius: 10px;
  padding: 5px 0;
  font-size: 0.66rem;
`;
const Name = styled.div`
  display: flex;
  width: 90%;
  font-size: 0.66rem;
  overflow: hidden;
  text-overflow: ellipsis;
  scrollbar-width: none;
  white-space: nowrap;
  font-weight: 500;
`;
const ProductId = styled.div`
  display: none;
`;
const Category = styled.div`
  display: none;
`;
const Brand = styled.div`
  display: none;
`;
const Container = styled.div`
  width: 68px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover {
    transform: scale(1.09);
    ${Tooltip} {
      white-space: unset;
      display: flex;
    }
    ${Name} {
      visibility: hidden;
    }
  }
  &:active {
    transform: scale(1);
  }
`;
const Img = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  min-width: 52px;
  min-height: 52px;
`;
const Event = styled.p`
  font-size: 0.62rem;
  margin-top: 0.15rem;
`;
const Price = styled.p`
  font-size: 0.63rem;
`;

export default ({ id, brand, name, img, event, price, category }) => {
  return (
    <Container>
      <ProductId className="id">{id}</ProductId>
      <Brand className="brand">{brand}</Brand>
      <Category className="category">{category}</Category>
      <Name className="name">{name}</Name>
      <Tooltip>{name}</Tooltip>
      <Img className="img" src={img} alt={name} />
      <Event className="event">{event}</Event>
      <Price className="price">{price}</Price>
    </Container>
  );
};
