import React from "react";
import { Link } from "react-router-dom";
import Photo from '../../../assets/svg/userAnonimo.svg';

export const HeaderWeb = () => {
  return (
    <div className="flex flex-direction space-x-20 p-10 font-bold
    text-4xl  justify-between pr-20 pl-20 pr-5.5">
       <h1>Pet Saúde</h1>
       <nav class="navigation">
            <ul className="flex flex-direction  space-x-10 font-normal text-2xl ">
                <li class="nav-item"><a href="./index.html">Home</a></li>
                <li class="nav-item"><a href="#">Profissionas</a></li>
                <li class="nav-item"><a href="#">Blog</a></li>
                <li class="nav-item"><a href="#">Sobre nós</a></li>
                <i class='bx bx-search'></i>
            </ul>
        </nav>
       
       <div className="flex flex-direction space-x-5 ">
       <img src={Photo} />
        <Link to="/mainLogin" class="home-btn">
            Entrar
        </Link>
        </div>
    
    </div>
  );
};