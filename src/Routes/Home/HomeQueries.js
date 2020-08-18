import { gql } from "apollo-boost";

export const PRODUCT = gql`
  {
    Product {
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

export const ME = gql`
  query me {
    me {
      name
      email
      role
    }
  }
`;

export const LOCAL_LOGIN = gql`
  {
    isLogIn @client
  }
`;
