import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
      --background: #130A27;
      --purple-dark: #251A34;
      --red: #E52E4D;
      --green: #00ED82;
      --yellow: #FBDE1B;
      --grey-medium: #969cb3;
      --text-title: #363f5f;

      --blue: #5429CC;
      --blue-light: #6933FF;

      --text-button: #FFF;
      --text-body: #1C1C1C;
      
      --grey-light: #C0C0C0;
      --black: #000000;
      --black-medium: #1C1C1C;
      

      --shape: #ffffff;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
