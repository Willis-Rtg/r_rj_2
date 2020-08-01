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

export default ({ email, name, setAction }) => {
  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      email: email.value,
      name: name.value,
    },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email && name)
      try {
        const {
          data: { createUser: newUser },
        } = await createUser();
        console.log("onSubmit -> newUser", newUser);
        setAction(true);
      } catch (e) {
        console.log(e);
      }
  };
  return (
    <LoginForm onSubmit={onSubmit}>
      <Input name="name" type="text" placeholder="닉네임" {...name} />
      <Input name="email" type="email" placeholder="이메일" {...email} />
      <Button type="submit">Join</Button>
    </LoginForm>
  );
};
