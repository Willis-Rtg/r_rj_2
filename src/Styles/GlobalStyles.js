import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing:border-box;
    &:focus {
      outline: 0;
      /* box-shadow: 0 0 0 1px rgba(21, 156, 228, 0.45); */
    }
  }
  html{
    width:100%;
    height:100%;
  }
  body{
    width:100%;
    height:100%;
    font-family: 'Do Hyeon', cursive;
  }
  #root{
    height:100%;
  }
`;

export default GlobalStyles;
