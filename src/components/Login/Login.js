import React from "react";
import styled from "styled-components";
import useInput from "../../Hooks/useInput";

const LoginWrapper = styled.div``;
const Login = styled.div``;
const Input = styled.input``;

export default () => {
  const email = useInput("");
  return (
    <LoginWrapper>
      <Input type="email" {...email} />
      <Input type="username" />
      <Input type="password" />
      <Input type="password2" />
    </LoginWrapper>
  );
};
