import React from "react";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0%{
    opacity:0;
  }
  50%{
    opacity:1;
  }
  100%{
    opacity:0;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Animation} 2s ease-in-out infinite;
`;

export default () => <Loader>알뜰.편</Loader>;
