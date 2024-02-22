import { Table } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  /* Cores de fundo */
  --background-color: #121212; /* Cor de fundo escura */
  --code-background-color: #555555; /* Cor de fundo do código */

  /* Cores de texto */
  --text-color: #e0e0e0; /* Cor do texto padrão */
  --code-text-color: #ffffff; /* Cor do texto do código */

  /* Paleta de amarelos */
  --yellow-100: #ffff80; 
  --yellow-200: #ffff00; 
  --yellow-300: #ffd700; 

  /* Paleta de brancos */
  --white-100: #ffffff; 
  --white-200: #f5f5f5; 
  --white-300: #eeeeee; 

  /* Paleta de cinzas */
  --gray-100: #333333; 
  --gray-200: #555555; 
  --gray-300:#212529 
}

  body {
    margin: 16;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color); 
    color: var(--text-color); 
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
      padding: 4px;
      border-radius: 4px;
    background-color: var(--code-background-color); 
    color: var(--yellow-100); 
  }

  h1, h2, h3 {
    color: var(--yellow-100); 
  }

  h4, h5, h6 {
    color: var(--yellow-200);
  }

  p{
    color: var(--white-300);
  }

  li, ul {
    color: var(--white-100);
  }

  div{
    margin: 8px;
    padding: 8px;
  }
`;

export default GlobalStyles;
