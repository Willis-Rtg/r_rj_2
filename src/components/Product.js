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
const ProdName = styled.p`
  font-size: 12.5px;
`;
const ProdImg = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 50px;
  height: 50px;
`;
const ProdCate = styled.p`
  font-size: 12.5px;
`;

export default (props) => {
  return (
    <Container>
      <ProdName>{props.name}</ProdName>
      <ProdImg src={props.img} />
      <ProdCate>{props.event}</ProdCate>
      <>{props.price}</>
    </Container>
  );
};
