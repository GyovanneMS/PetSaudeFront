import React from 'react';
import { Link } from "react-router-dom";
import configIcon from "./img/configIcon.png";
import Menu from "../../../assets/svg/leading-icon.svg";


export const HeaderProfile = () => {
    return (

        <header className="px-12 flex font-normal justify-between h-30 text-4xl items-center"> 
        
        {/* flex font-normal justify-around bg-white h-30 text-4xl*/}

            <img className="visible md:hidden " src={Menu}></img>
            <h1 className=" text-1xl sm:flex justify-start font-bold">PetSaúde</h1>
            <nav>
                <div class="flex justify-between items-center ">
                    <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
                    </span>
                </div>
                <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
                    <li class="mx-4 my-6 md:my-0">
                        <a href="#" class="text-2xl hover:text-green-300 duration-500">Profissionais</a>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="#" class="text-2xl hover:text-green-300 duration-500">Blog</a>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="#" class="text-2xl hover:text-green-300 duration-500 flex-row justify-center ">Sobre nós</a>
                    </li>
                </ul>
                <div class="menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>

            <div className=" md:flex flex-direction " >
                <img className="md:pt-1 " src={configIcon} />
                <Link to="../login" class=" invisible xl:visible home-btn p-1 ">
                    Configurações
                </Link>
            </div>


        </header>

    );
}

