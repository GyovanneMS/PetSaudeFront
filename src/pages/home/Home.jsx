import React from "react";
import { Link } from 'react-router-dom';
import { Header } from '../../components/headers/headerEdits'

export const HomePage = () => {
  return (
    <>
        <Header/>

        <p>home</p>
        <Link to="/pages/CadastroVet">Cadastro do veterinario</Link>
        <Link to="/login">Login do usuario</Link>
        <Link to="/Endereco">Endereço do usuario</Link>
        <Link to="/login/mainLogin">Main Login</Link>
        <Link to="/home/HeaderWeb">Header das telas Web</Link>
        <Link to="/home">Landing Page</Link>
    </>
  );
};
