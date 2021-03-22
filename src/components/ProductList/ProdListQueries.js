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

export const PRODUCTS = gql`
  query products($brand: [String], $category: String, $event: String) {
    products(brand: $brand, category: $category, event: $event) {
      id
      name
      img
      brand
      event
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProducts($id: String, $category: String) {
    updateProducts(id: $id, category: $category) {
      name
      brand
      category
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
