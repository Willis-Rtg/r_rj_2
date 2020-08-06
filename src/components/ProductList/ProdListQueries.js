import { gql } from "apollo-boost";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $brand: String!
    $event: String!
    $price: String!
    $img: String!
    $category: String!
    $description: String!
  ) {
    createProduct(
      name: $name
      brand: $brand
      event: $event
      price: $price
      img: $img
      category: $category
      description: $description
    ) {
      id
      name
      brand
      event
      price
      img
      category
      description
    }
  }
`;

export const DELETE_PRODUCTS = gql`
  mutation deleteProducts($brand: String) {
    deleteProducts(brand: $brand) {
      count
    }
  }
`;
