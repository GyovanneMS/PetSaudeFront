import React from "react";
import { Link } from "react-router-dom";
import Photo from '../../../assets/svg/userAnonimo.svg';
import Menu from '../../../assets/svg/leading-icon.svg';


export const HeaderWeb = () => {
  return (
    <div className="flex font-normal items-center justify-around bg-white shadow
    xl:p-5 h-30 text-4xl ">
      <img className="visible md:hidden " src={Menu}></img>
       <h1 className=" text-1xl sm:flex justify-start font-bold">PetSaúde</h1>
       <nav>
      <div className="flex justify-between items-center ">
      <span className="text-3xl cursor-pointer mx-2 md:hidden block">
        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
      </span>
      </div>
            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
              <li className="mx-4 my-6 md:my-0 transition">
                <a href="#" className="text-2xl duration-500 flex flex-col-reverse relative transition-all
                after:h-0.5 after:absolute after:w-0 after:bg-green-300 after:transition
                hover:after:w-full">Home</a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-2xl duration-500 flex flex-col-reverse relative transition-all
                after:h-0.5 after:absolute after:w-0 after:bg-green-300 after:transition
                hover:after:w-full">Prossionais</a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-2xl duration-500 flex flex-col-reverse relative transition-all
                after:h-0.5 after:absolute after:w-0 after:bg-green-300 after:transition
                hover:after:w-full">Blog</a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-2xl duration-500 flex flex-col-reverse relative transition-all
                after:h-0.5 after:absolute after:w-0 after:bg-green-300 after:transition
                hover:after:w-full">Sobre nós</a>
              </li>
          </ul>
            <div className="menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
       
       <div className=" w-10 md:flex flex-direction " >
       <img className="pt-10 pr-1 md:pt-1 " src={Photo} />
        <Link to="../login" className=" invisible xl:visible home-btn p-1 ">
            Entrar
        </Link>
        </div>
    
    </div>
  );
};

