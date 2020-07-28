import React from "react";
import styled from "styled-components";
import useInput from "../../../Hooks/useInput";
import Input from "../../Input";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER, LOCAL_LOG_IN } from "./LoginQueries";

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9px;
`;
const Button = styled.button`
  border: 0;
  border-radius: 15px;
  margin-top: 3px;
  padding: 5px 7px;
  font-size: 12px;
`;

export default ({ email, password }) => {
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: { email: email.value, password: password.value },
  });
  const [localLogin] = useMutation(LOCAL_LOG_IN);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.value !== "") {
      try {
        const {
          data: { loginUser: token },
        } = await loginUser();
        if (token) {
          await localLogin({ variables: { token } });
          toast.success("Successly login");
          setTimeout((window.location.href = "/"), 3000);
        }
      } catch (e) {
        console.log(e);
        toast.error("have a error");
      }
    }
  };
  return (
    <LoginForm onSubmit={onSubmit}>
      <Input name="email" type="email" placeholder="이메일" {...email} />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        {...password}
      />
      <Button type="submit">Log In</Button>
    </LoginForm>
  );
};
