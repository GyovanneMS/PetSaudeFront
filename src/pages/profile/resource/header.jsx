import React from 'react';
import { Link } from "react-router-dom";
import configIcon from "./img/configIcon.png";
import Menu from "../../../assets/svg/leading-icon.svg";


export const HeaderProfile = () => {
    return (

        <header className=" flex font-normal justify-between pt-2 h-30 text-4xl items-center md:px-12 pt-10"> 

            <img className="visible h-40 w-20 md:hidden " src={Menu}></img>
            <Link to="../home">
            <h1 className=" text-1xl invisible xl:visible sm:visible flex justify-start font-bold">PetSaúde</h1>
            </Link>
            <nav>
                <div class="flex justify-between items-center ">
                    <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
                    </span>
                </div>
                <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
                    <li class="mx-4 my-6 md:my-0">
                        <a href="../home" class="text-2xl hover:text-green-300 duration-500">Home</a>
                    </li>
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

            <div className="flex content-items-center flex-direction md:pt-2" >
                <img className="flex content-center content-items-center h-20 xl:w-2/4  pt-2" src={configIcon} />
                <Link to="../" class=" invisible md:visible xl:visible home-btn text-1xl  ">
                   <p className='pt-6 text-3xl'>Configurações</p> 
                </Link>
            </div>


        </header>

    );
}

