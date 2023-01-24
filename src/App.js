import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./assets/UI/temas";

function App() {
  return (
    <ThemeProvider theme={temaEscuro}>
        <GlobalStyle/>
        <Cabecalho />
        <Container />
    </ThemeProvider>

    
  );
}

export default App;
