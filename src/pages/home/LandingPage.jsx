import React from "react";
import { Link } from "react-router-dom";
import { HeaderWeb } from "./HeaderWeb";
import Footprint from "../../assets/Cat Footprint.svg";
import Dog from "../../assets/iconDog.svg";


export const LandingPage = () => {
  return (
    <div>
      <HeaderWeb/>
    <>
      <input type="text" id="Search-Pet" placeholder="Pesquisar especialistas"/>
      <input type="text" id="Search-Vet" placeholder="Pesquisar veterinários próximos"/> 
    </>
    <div>
      <h1 class="text-h1">Agende suas consultas e forneça o melhor para o seu Pet!</h1>
      <Link to="/" class="home-btn">Procure um veterinário próximo!</Link>
      <img src={Dog}/>
    </div>
    <div>
      <img src={Footprint}/>
    </div>
    </div>
  );
};