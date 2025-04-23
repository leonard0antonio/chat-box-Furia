// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Corpo da página */
  body {
    font-family: 'Inter', 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    padding: 20px;

    @media (max-width: 768px) {
      padding: 10px;
    }
  }

  /* Container principal */
  #root {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      padding: 15px;
    }
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #007bff;
    }
  }

  /* Botões */
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  /* Cabeçalhos */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', sans-serif;
    color: #222;
    margin-bottom: 10px;
  }

  /* Listas */
  ul, ol {
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  /* Navbar */
  nav {
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    a {
      color: white;
      margin: 0 10px;

      &:hover {
        color: #f4f4f4;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: 15px;
    }
  }
`;
