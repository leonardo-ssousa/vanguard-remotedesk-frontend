import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  h1,h2,h3,h4,p{
    margin: 0;
    padding: 0;
    color: ${props => props.theme.font.primary};
  }

  body {
     font-family: "Google Sans";
  }

  #modals-root {
    position: fixed;
    top: 0;
    left: 0;
  }
`;
