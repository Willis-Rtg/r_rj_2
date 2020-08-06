import { gql } from "apollo-boost";

export const LOCAL_LOGIN = gql`
  {
    isLogIn @client
  }
`;
