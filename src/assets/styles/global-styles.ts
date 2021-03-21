import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html,
  body {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;