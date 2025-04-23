// src/pages/Home.tsx
import React from "react";
import ChatBot from "../components/ChatBot";
import furiaLogo from "../assets/logo-furia.png"; // Salva a logo como PNG em /assets

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <img
        src={furiaLogo}
        alt="Logo FURIA"
        className="w-32 md:w-40 mb-6 drop-shadow-lg"
      />
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-fuchsia-500 text-center">
        ChatBot FURIA 🐆
      </h1>
      <ChatBot />
      <footer className="mt-6 text-sm text-gray-500">
        Feito por Leonardo Antônio – Desafio Técnico FURIA Tech 2025
      </footer>
    </div>
  );
};

export default Home;
