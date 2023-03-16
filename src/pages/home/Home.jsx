import React from "react";
import { Link } from 'react-router-dom';
import { Header } from '../../components/headers/headerEdits.jsx/headerEdits'

export const Casa = () => {
  return (
    <>
        <Header/>
        <p>home</p>
        <Link to="/pages/CadastroVet">Cadastro do veterinario</Link>
    </>
  );
};
