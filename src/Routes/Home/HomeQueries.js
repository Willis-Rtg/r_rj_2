import { gql } from "apollo-boost";

export const DELETE_PRODUCTS = gql`
  mutation deleteProducts($brand: String) {
    deleteProducts(brand: $brand) {
      count
    }
  }
`;

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

export const products = gql`
  query products($brand: String, $category: String, $event: String) {
    id
    name
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
