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
        <div className="flex flex-row justify-between content center w-auto h-4/5 mt-10 ">

          <div className="basis-1/2 flex flex-col justify-center items-center">
            <h1 className="basis-1/2 flex justify-center items-center font-normal text-6xl h-40 w-1/2 font-bold">Agende suas consultas e forneça o melhor para o seu Pet!</h1>
            <Link className="basis-1/4 border-lime-800 w-96 text-3xl flex text-center justify-center items-center border border-2 rounded-3xl border-[#9ED1B7]" to="/">Procure um veterinário próximo!</Link>
          </div>

          <div className="flex justify-end content-center basis-1/2">
            <img className="w-4/5" src={Dog}/>
          </div>
      </div>

      <div className="w-auto flex-none">
        <img className=" w-1/2 " src={Footprint}/>
      </div>
    </div>
  );
};

