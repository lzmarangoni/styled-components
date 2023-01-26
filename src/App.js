import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./assets/UI/temas";
import { useState } from "react";
import { BtnTema } from "./assets/UI";
import SwitcherTema from "./Components/SwitcherTema";




function App() {
  const [tema, setTema] = useState(false);
  
  return (
    <ThemeProvider theme={tema ? temaEscuro : temaClaro}>
        <GlobalStyle/>
        <BtnTema onClick={()=>{setTema(!tema); console.log(tema)
        }}>
          <SwitcherTema tema={tema}/>
        </BtnTema>
        <Cabecalho />
        <Container />
    </ThemeProvider>

    
  );
}

export default App;
