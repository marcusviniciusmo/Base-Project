import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5% /* 1rem = 10px */;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    min-height: 100%;
  }
  
  body {
    min-height: 100vh;
    font-family: sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  button{
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  image-rendering, picture {
    display: block;
    max-width: 100%;
  }

  *:focus-visible {
    outline: 2px solid black;
    outline-offset: 2px;
  }
`;
