import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` * , *:after , *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
    font-size: 100%;
    height: 100%;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
