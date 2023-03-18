import React from "react";
import { Link } from "react-router-dom";
import { HeaderWeb } from "./resource/HeaderWeb";
import Footprint from "../../assets/svg/petPaws.svg";
import Dog from "../../assets/svg/dogAndCat.svg";


export const LandingPage = () => {
  return (
    <div>
      <HeaderWeb/>
    <div className="flex flex-row space-x-20 pl-200">
      <input className=" placeholder:italic placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Pesquisar especialistas"/>
      <input className="basis-1/2 placeholder:italic placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" id="Search-Vet" placeholder="Pesquisar veterinários próximos"/> 
    </div>
    <div className="flex justify-between pt-15 w-auto h-30">

      <h1 className="font-normal text-6xl w-1/2 h-40">Agende suas consultas e forneça o melhor para o seu Pet!</h1>
      <Link className="border-lime-800 w-0 h-20" to="/">Procure um veterinário próximo!</Link>
      <div className="pt-40 w-auto">
      <img className="w-full" src={Dog}/>
      
      </div>
    </div>

    <div className="pt-20 w-auto">
      <img className=" w-1/2 " src={Footprint}/>
    </div>
    </div>
  );
};