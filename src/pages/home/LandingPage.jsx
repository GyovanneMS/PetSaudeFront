import React from "react";
import { Link } from "react-router-dom";
import { HeaderWeb } from "./resource/HeaderWeb";
import Footprint from "../../assets/svg/petPaws.svg";
import Dog from "../../assets/svg/dogAndCat.svg";


export const LandingPage = () => {
  return (
    <div>
      <HeaderWeb/>
    <div className="flex flex-row space-x-20 p-10 justify-around font-normal texto-2xl">
      <input className="block bg-white w-1/4 border border-slate-200 p-5 rounded-lg border-black border-2 hover:border-green-200" placeholder="Pesquisar especialistas"/>
      <input className="block bg-white w-1/4 border border-slate-300 p-5 rounded-lg border-black border-2 hover:border-green-200" placeholder="Pesquisar especialistas"/> 
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