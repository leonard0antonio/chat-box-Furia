// src/pages/Home.styles.ts
import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`;

export const Logo = styled.img`
  width: 80px;
  position: absolute;
  left: 1rem;
  top: 1rem;

  @media (min-width: 960px) {
    width: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #d946ef; // Tailwind fuchsia-500

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #9ca3af; // Tailwind gray-500
`;
