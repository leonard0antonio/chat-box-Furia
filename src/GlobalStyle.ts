import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Inter', sans-serif;
    background-color: #0d0d0d; /* fundo mais dark para combinar com FURIA */
    color: #e0e0e0;
    line-height: 1.6;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 12px;
    background-color: #111111; /* fundo interno mais escuro */
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media (max-width: 768px) {
      padding: 0.75rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem;
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #d946ef; /* fuchsia, para combinar */
    }
  }

  button {
    background-color: #d946ef; /* fúcsia padrão FURIA */
    color: white;
    border: none;
    padding: 0.625rem 1.25rem;
    border-radius: 9999px; /* botão bem arredondado */
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #a21caf; /* roxo mais escuro no hover */
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  input, textarea {
    width: 100%;
    padding: 0.625rem 1rem;
    border-radius: 8px;
    border: 1px solid #333;
    background-color: #1a1a1a;
    color: #e0e0e0;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease, background-color 0.3s ease;

    &:focus {
      border-color: #d946ef;
      background-color: #262626;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  nav {
    background-color: #222;
    color: white;
    padding: 0.75rem;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;

    a {
      color: white;

      &:hover {
        color: #d946ef;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
