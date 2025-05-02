
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle"

// O código abaixo é o ponto de entrada do aplicativo React. Ele importa as bibliotecas necessárias, como React, ReactDOM e BrowserRouter.
// O componente App é o principal componente do aplicativo, que contém a lógica e a estrutura do mesmo.
// O GlobalStyle é um componente que aplica estilos globais ao aplicativo, como reset de CSS e estilos de fonte.
// O React.StrictMode é um componente que ativa verificações adicionais e avisos para ajudar a identificar problemas potenciais no aplicativo.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
