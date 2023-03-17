import React from "react";
import { Link } from 'react-router-dom';
import { Header } from '../../components/headers/headerEdits.jsx/headerEdits'

export const Casa = () => {
  return (
    <>
        <Header/>
        
        <p>home</p>
        <Link to="/pages/CadastroVet">Cadastro do veterinario</Link>
        <Link to="/pages/login">Login do usuario</Link>
        <Link to="/pages/Endereco">Endereço do usuario</Link>
        <Link to="/login/mainLogin">Main Login</Link>
        <Link to="/home/HeaderWeb">Header das telas Web</Link>
        <Link to="/home/LandingPage">Landing Page</Link>
    </>
  );
};
