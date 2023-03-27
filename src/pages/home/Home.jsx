import React from "react";
import { Link } from 'react-router-dom';
import { Header } from '../../components/headers/headerEdits'

export const HomePage = () => {

  return (
    <>
        <Header/>

        <p>home</p>
        <Link to="/register/veterinary">Cadastro do veterinario</Link>/
        <Link to="/login">Login do usuario</Link>/
        <Link to="/register/address">Endereço do usuario</Link>/
        <Link to="/register">Main Login</Link>/
        <Link to="/home/HeaderWeb">Header das telas Web</Link>/
        <Link to="/home">Landing Page</Link>/
        <Link to="/profile/veterinary">profile veterinary</Link>/
        <Link to="/home/aboutUs">About Us</Link>
    </>
  );
  
};
