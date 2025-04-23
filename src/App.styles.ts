// src/App.styles.ts
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  font-family: sans-serif;
  background-color: black;
  color: white;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const AppHeader = styled.header`
  font-size: 2rem;
  color: #f4f4f4;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AppContent = styled.section`
  width: 100%;
  max-width: 1000px;
  background-color: #ffffff;
  color: #000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const AppButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px 0;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AppLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }

  a {
    color: white;
    font-size: 1rem;
    padding: 10px;

    &:hover {
      color: #f4f4f4;
    }

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

export const CardDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;
