import React from "react";
import { Link } from 'react-router-dom';
import { Header } from '../../components/headers/headerEdits'
import { useForm } from "react-hook-form";

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
        <Link to="/home/HeaderInfo">Header with Infos</Link>/
        <Link to="/home/Footer">Footer</Link>/
        <Link to="/home/aboutUs">About Us</Link>/
        <Link to="/profile/upgradeUser">Upgrade User Vets</Link>/
        <Link to="/profile/upgradeUser">Upgrade User Not vets</Link>/
        <Link to="/profile/infosPerson">Infos Person</Link>/
        <Link to="/profile/headerConfig">Header Config</Link>/
        <Link to="/profile/pet">Pet</Link>/
    </>
  );
  
};
