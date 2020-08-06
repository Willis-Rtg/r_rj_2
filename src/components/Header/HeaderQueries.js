import { gql } from "apollo-boost";

export const LOCAL_LOG_OUT = gql`
  mutation localLogout {
    localLogout @client
  }
`;
