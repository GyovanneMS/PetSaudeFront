import React from "react";
import { Link } from "react-router-dom";
import { HeaderWeb } from "./resource/HeaderWeb";
import Footprint from "../../assets/svg/petPaws.svg";
import Dog from "../../assets/svg/dogAndCat.svg";
import Doctor from "../../assets/svg/medico 1.svg";
import Local from "../../assets/svg/localizacao.svg";
import "./css/LandingPage.css";


export const LandingPage = () => {
  return (
    <div >
       <HeaderWeb />
    
    <div className=" home flex flex-row justify-center xl: space-x-20 p-10 font-normal texto-2xl " >
      <div className=" search flex flex-row gap-5  bg-white w-1/4 border rounded-lg border-black hover:border-green-200  p-5  ">
        <img src={Doctor} />
        <input className="w-full h-full text-2xl" placeholder="Pesquisar especialistas"/>
      </div>

      <div className=" flex flex-row bg-white w-1/4 border rounded-lg border-black hover:border-green-200  p-5">
        <img src={Local}/>
        <input className="w-full h-full text-2xl" placeholder="Pesquisar veterinários próximos"/>
      </div>
    
    </div>

      <div className="flex flex-row justify-between content center w-auto h-4/5 mt-10  ">

        <div className=" flex flex-col justify-center items-center">
          <h1 className="basis-1/2 flex justify-center items-center font-bold text-6xl  xl:text-7xl w-3/5 ">Agende suas consultas e forneça o melhor para o seu Pet!</h1>
          <Link className="flex text-center justify-center items-center border-2 rounded-3xl border-[#9ED1B7] h-30 w-50 basis-1-6 mt-10 xl:h-20 w-96 basis-1/6 text-3xl " to="/">Procure um veterinário próximo!</Link>
        </div>


        <div className="flex justify-end content-center basis-1/2 lg:bg-none">
          <img className="mt-10 w-4/5 " src={Dog}/>
        </div>
    </div>

    <div>
      <img className=" w-3/2 mt-20 xl:w-2/4" src={Footprint}/>
    </div>
    </div>
  );
};

