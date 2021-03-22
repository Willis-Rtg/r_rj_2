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
  width: 30px;
  height: 28px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

export default () => {
  const social_names = ["naver", "google", "facebook", "kakao"];
  const onSocial = (name) => {
    alert(`${name} 서비스 준비 중입니다.`);
  };
  return (
    <Wrapper>
      {social_names.map((name, index) => {
        return (
          <Btn key={index} onClick={() => onSocial(name)}>
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
