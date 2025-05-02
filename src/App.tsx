
import Home from "./pages/Home";
import { AppContainer } from "./App.styles";

// O componente App é o ponto de entrada do aplicativo. Ele envolve o componente Home dentro de um contêiner estilizado.
// O contêiner é estilizado usando styled-components, com um layout flexível que se adapta a diferentes tamanhos de tela.
// O componente App é exportado como o padrão para ser utilizado em outros arquivos, como o index.tsx, onde o aplicativo é renderizado na página.

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
