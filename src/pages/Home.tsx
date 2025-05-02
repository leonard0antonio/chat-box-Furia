
import React from "react";
import ChatBot from "../components/ChatBot";
import furiaLogo from "../assets/logo.gif";
import { HomeContainer, Logo, Title, Footer } from "./Home.styles";

// O componente Home é a página principal do aplicativo. Ele exibe o logo da FURIA, o título "ChatBot FURIA" e o componente ChatBot.
// O rodapé contém uma mensagem de crédito para o desenvolvedor.
// O componente é estilizado usando styled-components, com um layout responsivo que se adapta a diferentes tamanhos de tela.

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Logo src={furiaLogo} alt="Logo FURIA" />
      <Title>ChatBot FURIA</Title>
      <ChatBot />
      <Footer>
        Feito por Leonardo Antonio – Desafio Técnico FURIA
      </Footer>
    </HomeContainer>
  );
};

export default Home;
