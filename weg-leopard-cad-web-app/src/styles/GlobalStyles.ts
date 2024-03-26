import { Button } from "@mui/material";
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
--yellow-100: #ffff80; /* Amarelo mais claro */
--yellow-200: #ffff00; /* Amarelo médio */
--yellow-300: #ffd700; /* Amarelo mais escuro */

/* Paleta de brancos */
--white-100: #ffffff; /* Branco puro */
--white-200: #f5f5f5; /* Branco mais claro */
--white-300: #eeeeee; /* Branco ainda mais claro */

/* Paleta de cinzas */
--gray-100: #333333; /* Cinza escuro */
--gray-200: #555555; /* Cinza médio */
--gray-300: #212529; /* Cinza escuro azulado */

/* Paleta de azuis */
--blue-100: #bacbf2; /* Azul mais claro */
--blue-200: #7e9ee7; /* Azul médio */
--blue-300: #2c4e72; /* Azul escuro */

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
    color: var(--blue-100); 
  }

  h4, h5, h6 {
    color: var(--yellow-300);
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

export const IconWrapper = styled("div")`
  min-width: fit-content;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-bottom: 4px;
`;

export const GlobalSmallImg = styled.img`
  height: 24px;
  width: 24px;
`;

export const GlobalMediumImg = styled.img`
  height: 32px;
  width: 32px;
`;

export const GlobalLargeImg = styled.img`
  height: 48px;
  width: 48px;
`;

export enum ICON_SIZE {
  IN = "inherit",
  L = "large",
  M = "medium",
  S = "small",
}
