import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { corPrimaria } from "../../assets/UI/estilosPadrao";

const Header = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const BtnHeader = styled.a`
text-align: center;
border-radius: 3px;
padding: 5px 20px;
margin: 0 10px;
font-weight: 600;
border: 2px solid white;
background:${(props) => props.primario ? "white" : corPrimaria};
color:${(props)=> props.primario ? corPrimaria : "white"};
`


const Cabecalho = () => {
  return (
    <Header>
      <img className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primario href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">
          Sair
        </BtnHeader>
      </div>
    </Header>
  );
};

export default Cabecalho;
