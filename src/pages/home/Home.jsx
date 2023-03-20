import React from "react";
import { Link } from 'react-router-dom';
import { Header } from '../../components/headers/headerEdits'

export const HomePage = () => {
  return (
    <>
        <Header/>

        <p>home</p>
        <ul>
          <li>

            <Link to="/register/veterinary">Cadastro do veterinario</Link>
          </li>
          <li>
            <Link to="/login">Login do usuario</Link>
            
          </li>
          <li>
            <Link to="/register/address">Endereço do usuario</Link>

          </li>
          <li>
           <Link to="/home/HeaderWeb">Header das telas Web</Link>

          </li>
          <li>

            <Link to="/home">Landing Page</Link>
          </li>
          <li>

            <Link to="/profile/veterinary">perfil do veterinario</Link>

          </li>
        </ul>
    </>
  );
};
