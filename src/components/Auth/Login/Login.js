import React from "react";
import styled from "styled-components";
import Input from "../../Input";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER, LOCAL_LOG_IN } from "./LoginQueries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9px;
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

export default ({ username, password, setLoginModal }) => {
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: { username: username.value, password: password.value },
  });
  const [localLogin] = useMutation(LOCAL_LOG_IN);
  const onSubmit_email = async (e) => {
    e.preventDefault();
    if (username.value !== "") {
      const {
        data: {
          loginUser: { ok, token, error },
        },
      } = await loginUser();

      if (!ok) return toast.error(error);
      localLogin({ variables: { token } });
      toast.success("Success to log in");
      setLoginModal(false);
      window.location.href = "/";
    }
  };

  return (
    <LoginForm onSubmit={onSubmit_email} autoComplete="new-off">
      <Input
        name="username"
        placeholder="아이디"
        {...username}
        autoComplete="new-off"
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        {...password}
        autoComplete="new-off"
      />
      <SendBtn type="submit">
        <FontAwesomeIcon icon={faPaperPlane} color="#33a2c4" />
      </SendBtn>
    </LoginForm>
  );
};
