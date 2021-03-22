import { gql } from "apollo-boost";

export const SEND_MAIL = gql`
  mutation sendMail($email: String!) {
    sendMail(email: $email)
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation localLogin($token: String!) {
    localLogin(token: $token) @client
  }
`;
