import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../Input";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER, LOCAL_LOG_IN, SEND_MAIL } from "./LoginQueries";
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

export default ({ email, password }) => {
  const [sendMail] = useMutation(SEND_MAIL, {
    variables: { email: email.value },
  });
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: { email: email.value, password: password.value },
  });
  const [localLogin] = useMutation(LOCAL_LOG_IN);
  const onSubmit_email = async (e) => {
    e.preventDefault();
    if (email.value !== "") {
      try {
        // const {
        //   data: { sendMail: sendSecret },
        // } = await sendMail();
        // if (!sendSecret) throw Error("have the error for sending secret");
        const {
          data: { loginUser: token },
        } = await loginUser();
        if (token) {
          localLogin({ variables: { token } });
          toast.success("Success to log in");
          window.location.href = "/";
        } else throw Error();
      } catch (e) {
        console.log(e);
        toast.error("have a error");
      }
    }
  };

  async function onSubmit_secret(e) {
    e.preventDefault();
    if (email.value && password.value)
      try {
        const {
          data: { loginUser: token },
        } = await loginUser();
        if (token) {
          localLogin({ variables: { token } });
          window.location.href = "/";
        } else throw Error();
      } catch (e) {
        console.log(e);
      }
  }

  return (
    <LoginForm onSubmit={onSubmit_email}>
      <Input name="email" type="email" placeholder="이메일" {...email} />
      <Input
        name="password"
        type="password"
        placeholder="이메일"
        {...password}
      />
      <SendBtn type="submit">
        <FontAwesomeIcon icon={faPaperPlane} color="#33a2c4" />
      </SendBtn>
    </LoginForm>
  );
};
