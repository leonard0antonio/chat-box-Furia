// src/pages/Home.tsx
import React from "react";
import ChatBot from "../components/ChatBot";
import furiaLogo from "../assets/logo.gif";
import { HomeContainer, Logo, Title, Footer } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Logo src={furiaLogo} alt="Logo FURIA" />
      <Title>ChatBot FURIA 🐆</Title>
      <ChatBot />
      <Footer>
        Feito por Leonardo Antonio – Desafio Técnico FURIA
      </Footer>
    </HomeContainer>
  );
};

export default Home;
