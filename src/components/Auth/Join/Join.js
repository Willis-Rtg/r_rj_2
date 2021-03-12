import React from "react";
import styled from "styled-components";
import Input from "../../Input";
import { CREATE_USER } from "./JoinQueries";
import { useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12.5px;
`;
const SendBtn = styled.button`
  border: 0;
  border-radius: 15px;
  margin-top: 3px;
  font-size: 1rem;
  background-color: white;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

export default ({ email, name, password, password_confirm, setAction }) => {
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
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        {...password}
      />
      <Input
        name="password_confirm"
        type="password"
        placeholder="비밀번호 확인"
        {...password_confirm}
      />
      <SendBtn type="submit">
        <FontAwesomeIcon icon={faPaperPlane} color="#33a2c4" />
      </SendBtn>
    </LoginForm>
  );
};
