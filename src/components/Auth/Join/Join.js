import React from "react";
import styled from "styled-components";
import useInput from "../../../Hooks/useInput";
import Input from "../../Input";
import { CREATE_USER } from "./JoinQueries";
import { useMutation } from "@apollo/react-hooks";

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12.5px;
`;
const Button = styled.button`
  border: 0;
  background-color: inherit;
  font-size: 14px;
`;

export default ({ email, name, password, password_confirm }) => {
  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      email: email.value,
      name: name.value,
      password: password.value,
      password_confirm: password_confirm.value,
    },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email && name && password && password_confirm)
      try {
        const {
          data: { createUser: newUser },
        } = await createUser();
      } catch (e) {
        console.log(e);
      }
  };
  return (
    <LoginForm onSubmit={onSubmit}>
      <Input name="name" type="text" placeholder="닉네임" {...name} />
      <Input name="email" type="email" placeholder="이메일" {...email} />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        {...password}
      />
      <Input
        name="password_confirm"
        type="password"
        placeholder="비밀먼호 확인"
        {...password_confirm}
      />
      <Button type="submit">Join</Button>
    </LoginForm>
  );
};
