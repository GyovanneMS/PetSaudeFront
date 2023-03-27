import React from "react";
import {Link} from "react-router-dom";
import Photo from '../../../assets/svg/userAnonimo.svg';
import Menu from '../../../assets/svg/leading-icon.svg';
import FootHeader from "../../../assets/svg/FootHeader.svg";


export const HeaderInfo = () => {
    return (
        <>
            <section className=" bg-[#9ED1B7] w-100 h-full">
            <div className="flex font-normal items-center justify-around
    xl:p-5 h-30 text-4xl ">
      <img className="visible md:hidden " src={Menu}></img>
       <h1 className=" text-1xl sm:flex justify-start font-bold">PetSaúde</h1>
       <nav>
      <div class="flex justify-between items-center ">
      <span class="text-3xl cursor-pointer mx-2 md:hidden block">
        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
      </span>
      </div>
            <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
              <li class="mx-4 my-6 md:my-0 transition">
                <a href="#" class="text-2xl duration-500 flex flex-col-reverse relative transition-all
                after:h-0.5 after:absolute after:w-0 after:bg-green-300 after:transition
                hover:after:w-full">Home</a>
              </li>
              <li class="mx-4 my-6 md:my-0">
                <a href="#" className="text-2xl duration-500 flex flex-col-reverse relative transition-all
                after:h-0.5 after:absolute after:w-0 after:bg-green-300 after:transition
                hover:after:w-full">Prossionais</a>
              </li>
              <li class="mx-4 my-6 md:my-0">
                <a href="#" className="text-2xl duration-500 flex flex-col-reverse relative transition-all
                after:h-0.5 after:absolute after:w-0 after:bg-green-300 after:transition
                hover:after:w-full">Blog</a>
              </li>
              <li class="mx-4 my-6 md:my-0">
                <a href="#" className="text-2xl duration-500 flex flex-col-reverse relative transition-all
                after:h-0.5 after:absolute after:w-0 after:bg-green-300 after:transition
                hover:after:w-full">Sobre nós</a>
              </li>
          </ul>
            <div class="menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
       
       <div className=" w-10 md:flex flex-direction " >
       <img className="pt-10 pr-1 md:pt-1 " src={Photo} />
        <Link to="../login" class=" invisible xl:visible home-btn p-1 ">
            Entrar
        </Link>
        </div>
    
    </div>

            <div className="pt-5 xl:pt-40 ">
                <div className="flex flex-col justify-center text-center align-center">
                <h1 className="flex justify-center pt-10 font-bold text-7xl basis-1/8 h-3/4 rounded bg-[#78A890] xl:text-9xl p-50"> Blog</h1>
                <p className="flex justify-center xl:text-center text-4xl pl-20 mt-20 w-1/2 h-40">Tudo o que você precisa saber sobre os cuidados
                com seu animal de estimação e curiosidas interressantes </p>
                </div>
                <img className=" pt-60 w-full" src={FootHeader}/>

            </div>

            </section>
        </>
    )
};