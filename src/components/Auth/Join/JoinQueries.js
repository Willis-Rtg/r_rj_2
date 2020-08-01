import { gql } from "apollo-boost";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $name: String!) {
    createUser(email: $email, name: $name) {
      id
      email
      name
    }
  }
`;
