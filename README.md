# 🧠 Chat-Box FURIA

![Chatbot FURIA](https://drive.google.com/uc?id=1m-JFUgSGYwNe35_7gmb4_kvCzxZVV59l)

Este é um chatbot temático sobre o time brasileiro de CS:GO **FURIA Esports**, desenvolvido com o objetivo de simular interações com os fãs do time e oferecer informações sobre jogadores, partidas e curiosidades. É um projeto de um desafio tecnico da Furia

---

## 📌 Funcionalidades

- 🤖 Chatbot com respostas baseadas em palavras-chave  
- 🧩 Múltiplos menus temáticos (jogadores, curiosidades, partidas etc.)  
- 💬 Respostas personalizadas com base no conteúdo do JSON  
- 🖼 Interface amigável desenvolvida em **React**  
- 🌐 Simula diálogos interativos com torcedores da FURIA  

---

## 🛠 Tecnologias Utilizadas

- ⚛️ React (com JSX)
- ⚡ Vite (para desenvolvimento rápido e build otimizado)
- 📜 JavaScript ES6+
- 🎨 HTML5 + CSS3
- 🧩 JSON (para dados do chatbot)
- 🧠 Hooks (useState, etc.)
- 🌍 Git & GitHub

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório**
```bash
git clone https://github.com/leonard0antonio/chat-box-Furia.git
Instale as dependências

bash
Copiar
Editar
npm install
Rode o projeto

bash
Copiar
Editar
npm start
O projeto será iniciado em http://localhost:3000.

🧠 Estrutura do Projeto
pgsql
Copiar
Editar
chat-box-Furia/
├── public/
├── src/
│   ├── components/
│   │   └── ChatBot.jsx
│   ├── data/
│   │   └── furiaData.json
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
🧩 Exemplos de Palavras-chave
Palavra-chave	Resposta Esperada
jogadores	Lista de jogadores da FURIA
curiosidades	Curiosidades sobre o time
csgo	Informações relacionadas ao jogo
notícias	Notícias recentes sobre a FURIA
menu	Opções de menus disponíveis no chatbot

📚 Objetivo do Projeto
Este projeto foi desenvolvido com fins educacionais, com foco em:

Praticar desenvolvimento com React e manipulação de dados em JSON

Criar um chatbot interativo sem o uso de IA, mas baseado em lógica condicional

Aplicar conceitos de componentes reutilizáveis

👨‍💻 Autor
Leonardo Antonio da Silva
📍 Camaragibe, Pernambuco
🎓 Estudante de Análise e Desenvolvimento de Sistemas – Faculdade Católica Imaculada Conceição do Recife

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
