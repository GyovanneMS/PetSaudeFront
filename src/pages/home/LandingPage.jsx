import React from "react";
import { Link } from "react-router-dom";
import { HeaderWeb } from "./resource/HeaderWeb";
import Footprint from "../../assets/svg/petPaws.svg";
import Dog from "../../assets/svg/dogAndCat.svg";
import Doctor from "../../assets/svg/medico 1.svg";
import Local from "../../assets/svg/localizacao.svg";


export const LandingPage = () => {
  return (
    <div>
      <HeaderWeb/>
    <div className=" home flex flex-row justify-center space-x-20 p-5 font-normal texto-2xl " >
      <div className=" search flex flex-row gap-5 block bg-white w-1/4 border rounded-lg border-black border-2 hover:border-green-200  p-7 w-full">
        <img src={Doctor} />
        <input placeholder="Pesquisar especialistas"/>
      </div>

      <div className=" search flex flex-row gap-5 block bg-white w-1/4 border rounded-lg border-black border-2 hover:border-green-200  p-5">
        <img src={Local}/>
        <input placeholder="Pesquisar especialistas"/>
      </div>
    
    </div>

      <div className="flex flex-row justify-between content center w-auto h-4/5 mt-10 ">

        <div className="basis-1/2 flex flex-col justify-center items-center ">
          <h1 className="basis-1/2 flex justify-center items-center text-7xl w-3/5 h-30 font-bold ">Agende suas consultas e forneça o melhor para o seu Pet!</h1>
          <Link className="basis-1/4 w-96 text-3xl flex text-center justify-center items-center border border-2 rounded-3xl border-[#9ED1B7]" to="/">Procure um veterinário próximo!</Link>
        </div>


        <div className="flex justify-end content-center basis-1/2">
          <img className="w-4/5 pt-20 " src={Dog}/>
        </div>
    </div>

    <div className="pl-">
      <img className=" w-2/4 " src={Footprint}/>
    </div>
    </div>
  );
};

