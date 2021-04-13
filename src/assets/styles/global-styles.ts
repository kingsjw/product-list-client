import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import nomaliezCss from "./nomalizeCSS";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${nomaliezCss}
  
  html,
  body {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }
`;