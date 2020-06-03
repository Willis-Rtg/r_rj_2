import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: string!
    $brand: string!
    $event: string!
    $img: string
    $price: string!
    $category: string
    $description: string
  ) {
    createProduct(
      name: $name
      brand: $brand
      event: $event
      img: $img
      price: $price
      category: $category
      description: $description
    )
  }
`;

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

export default ({
  name,
  img = null,
  event,
  price,
  brand = "",
  category = null,
  description = null,
}) => {
  const { createProduct } = useMutation(CREATE_PRODUCT, {
    variables: {
      name,
      brand,
      event,
      img,
      price,
      category,
      description,
    },
  });
  return <Container></Container>;
};
