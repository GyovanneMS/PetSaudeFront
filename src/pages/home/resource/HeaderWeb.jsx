import React from "react";
import { Link } from "react-router-dom";
import Photo from '../../../assets/svg/userAnonimo.svg';


export const HeaderWeb = () => {
  return (
    <div className="flex flex-direction space-x-20 p-10 font-bold
    text-4xl  justify-between pr-20 pl-20 pr-5.5">
       <h1>PetSaúde</h1>
       <nav class="navigation">
            <ul className="flex flex-direction  space-x-10 font-normal text-2xl h-25 ">
                <li className=" hover:bg-green-100 rounded-lg ...">
                  <a href="./LandingPage.jsx">Home</a>
                </li>
                <li className=" hover:bg-green-100 rounded-lg ...">
                  <a href="#">Profissionas</a>
                  </li>
                <li className=" hover:bg-green-100 rounded-lg ...">
                  <a href="#">Blog</a>
                </li>
                <li className=" hover:bg-green-100 rounded-lg ...">
                  <a href="#">Sobre nós</a>
                </li>
                <i class='bx bx-search'></i>
            </ul>
        </nav>
       
       <div className="flex flex-direction space-x-5 ">
       <img src={Photo} />
        <Link to="../login" class="home-btn p-1">
            Entrar
        </Link>
        </div>
    
    </div>
  );
};