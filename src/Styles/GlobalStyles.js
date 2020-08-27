import { createGlobalStyle } from "styled-components";
import NanumGothic from "../assets/fonts/NanumGothic-Regular.ttf";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
  
    box-sizing:border-box;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 1px rgba(21, 156, 228, 0.45);
    }
  }
  html{
    width:100%;
    height:100%;
  }
  body{
    width:100%;
    height:100%;
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap');
    font-family: 'Nanum Gothic', sans-serif;
  }
  #root{
    height:100%;
  }
`;

export default GlobalStyles;
