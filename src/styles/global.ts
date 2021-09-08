import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font: 16px "Poppins", Arial, sans-serif;
    color: #121214;
  }

  button {
    cursor: pointer;
  }
`;
