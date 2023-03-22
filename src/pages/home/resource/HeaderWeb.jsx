import React from "react";
import { Link } from "react-router-dom";
import Photo from '../../../assets/svg/userAnonimo.svg';


export const HeaderWeb = () => {
  return (
    <div className="flex  font-normal
     justify-between bg-white shadow md: md:items-center 
    xl:space-x-20 p-10 text-4xl md:space-x-20  ">
       <h1 className="sm:flex justify-start font-bold">PetSaúde</h1>
       <nav>
      <div class="flex justify-between items-center ">
      <span class="text-3xl cursor-pointer mx-2 md:hidden block">
        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
      </span>
      </div>
            <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
              <li class="mx-4 my-6 md:my-0">
                <a href="#" class="text-2xl hover:text-green-300 duration-500">Home</a>
              </li>
              <li class="mx-4 my-6 md:my-0">
                <a href="#" class="text-2xl hover:text-green-300 duration-500">Profissionais</a>
              </li>
              <li class="mx-4 my-6 md:my-0">
                <a href="#" class="text-2xl hover:text-green-300 duration-500">Blog</a>
              </li>
              <li class="mx-4 my-6 md:my-0">
                <a href="#" class="text-2xl hover:text-green-300 duration-500">Sobre nós</a>
              </li>
          </ul>
            <div class="menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
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