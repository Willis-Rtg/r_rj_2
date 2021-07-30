import { gql } from "apollo-boost";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $brand: String!
    $event: String!
    $price: String!
    $img: String!
  ) {
    createProduct(
      name: $name
      brand: $brand
      event: $event
      price: $price
      img: $img
    ) {
      ok
      error
    }
  }
`;

export const SEE_PRODUCTS = gql`
  query seeProducts($brand: [String], $category: Category, $event: String) {
    seeProducts(brand: $brand, category: $category, event: $event) {
      id
      name
      img
      brand
      event
      price
      category
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: Int!, $category: Category) {
    updateProduct(id: $id, category: $category) {
      ok
      error
    }
  }
`;

export const DELETE_PRODUCTS = gql`
  mutation deleteProducts($brand: String) {
    deleteProducts(brand: $brand) {
      ok
    }
  }
`;
