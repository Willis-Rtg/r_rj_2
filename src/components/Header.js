import React from "react";
import styled from "styled-components";
import LoginBtn from "./Login/LoginBtn";

const Conatiner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const AppTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  position: relative;
  width: 100%;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 800;
`;

const Header = () => {
  return (
    <Conatiner>
      <AppTitle>
        <Title>알뜰.편</Title>
        <LoginBtn />
      </AppTitle>
    </Conatiner>
  );
};

export default Header;
