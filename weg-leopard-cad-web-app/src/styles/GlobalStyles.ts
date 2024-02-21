import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #121212; /* Cor de fundo escura */
    --text-color: #e0e0e0; /* Cor do texto padrão */
    --code-background-color: #333; /* Cor de fundo do código */
    --code-text-color: #fff; /* Cor do texto do código */

    /* Paleta de amarelos */
    --yellow-100: #ffff80; /* Amarelo mais claro */
    --yellow-200: #ffff00; /* Amarelo médio */
    --yellow-300: #ffd700; /* Amarelo mais escuro */

    /* Paleta de brancos */
    --white-100: #ffffff; /* Branco puro */
    --white-200: #f0f0f0; /* Branco mais claro */
    --white-300: #e0e0e0; /* Branco ainda mais claro */
  }

  body {
    margin: 16;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color); /* Use a variável de cor de fundo */
    color: var(--text-color); /* Use a variável de cor do texto padrão */
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    background-color: var(--code-background-color); /* Use a variável de cor de fundo do código */
    color: var(--code-text-color); /* Use a variável de cor do texto do código */
  }

  h1, h2, h3 {
    color: var(--yellow-100); /* Use a variável de cor do amarelo mais claro para títulos */
  }

  h4, h5, h6 {
    color: var(--yellow-200); /* Use a variável de cor do amarelo médio para subtítulos */
  }

  p {
    color: var(--white-100); /* Use a variável de cor do branco puro para texto normal */
  }
`;

export default GlobalStyles;

