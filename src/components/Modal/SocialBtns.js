import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
`;
const Btn = styled.button`
  border: 0;
  background: transparent;
`;
const Image = styled.img`
  width: 36px;
  height: 35px;
`;

export default () => {
  const social_names = ["naver", "google", "facebook", "kakao"];
  return (
    <Wrapper>
      {social_names.map((name, index) => {
        return (
          <Btn key={index}>
            <Image
              src={require(`../../assets/social-logos/${name}.png`)}
              alt={name}
            />
          </Btn>
        );
      })}
    </Wrapper>
  );
};
