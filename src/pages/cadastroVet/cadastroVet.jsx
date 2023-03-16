import React from "react";
import { Link } from "react-router-dom";
import SetaSair from '../../assets/SetaSairEdit.svg'

export const CadastroVet = () => {
  return (
    <>
      <img src={SetaSair}/>
      <h1>deu certo</h1>
      <Link to="/">Voltar pra Home</Link>
    </>
  );
};
