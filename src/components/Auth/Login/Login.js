import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../Input";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER, LOCAL_LOG_IN, SEND_MAIL } from "./LoginQueries";

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

export default ({ email, secret }) => {
  const [loginPage, setloginPage] = useState("email");
  const [sendMail] = useMutation(SEND_MAIL, {
    variables: { email: email.value },
  });
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: { email: email.value, secret: secret.value },
  });
  const [localLogin] = useMutation(LOCAL_LOG_IN);
  const onSubmit_email = async (e) => {
    e.preventDefault();
    if (email.value !== "") {
      try {
        const {
          data: { sendMail: sendSecret },
        } = await sendMail();
        if (!sendSecret) throw Error("have the error for sending secret");
        setloginPage("secret");
      } catch (e) {
        console.log(e);
        toast.error("have a error");
      }
    }
  };

  async function onSubmit_secret(e) {
    e.preventDefault();
    if (email.value && secret.value)
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

  return loginPage === "email" ? (
    <LoginForm onSubmit={onSubmit_email}>
      <Input name="email" type="email" placeholder="이메일" {...email} />
      <Button type="submit">이메일 보내기</Button>
    </LoginForm>
  ) : loginPage === "secret" ? (
    <LoginForm onSubmit={onSubmit_secret}>
      <Input name="secret" placeholder="확인 코드" {...secret} />
      <Button type="submit">Log In</Button>
    </LoginForm>
  ) : null;
};
