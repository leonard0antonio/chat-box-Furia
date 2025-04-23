// src/styles/global.ts
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
    background-color: #f0f0f0;
    color: #222;
    line-height: 1.6;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
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
      color: #007bff;
    }
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.625rem 1.25rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
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
    background-color: #333;
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
        color: #f4f4f4;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
