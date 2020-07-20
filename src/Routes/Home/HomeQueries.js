import { gql } from "apollo-boost";

export const products = gql`
  query products($brand: String, $category: String, $event: String) {
    id
    name
  }
`;
