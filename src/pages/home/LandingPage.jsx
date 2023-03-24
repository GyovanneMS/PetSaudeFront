import React from "react";
import {Link} from "react-router-dom";
import {HeaderWeb} from "./resource/HeaderWeb";
import Footprint from "../../assets/svg/petPaws.svg";
import Dog from "../../assets/svg/dogAndCat.svg";
import Doctor from "../../assets/svg/medico 1.svg";
import Local from "../../assets/svg/localizacao.svg";
import "./css/LandingPage.css";


export const LandingPage = () => {
	return (
		<section className="">

			<HeaderWeb/>

			<div className=" flex flex-col pt-20 justify-center gap-5 pl-10
    xl:flex-row font-normal texto-2xl  md:flex-row">
				<div
					className=" flex flex-row gap-5 bg-white border rounded-lg border-black transition hover:border-green-200 p-5 pl-5 w-80 md:w-1/2 xl:w-1/4">
					<img className="w-10" src={Doctor}/>
					<input className=" xl:pt-1 w-full h-full text-2xl" placeholder="Pesquisar especialistas"/>
				</div>

        <div className=" flex flex-col justify-center items-center w-50 ">
          <h1 className="basis-2/4 flex justify-center items-center font-bold text-3xl h-20 w-full xl:text-7xl ">Agende suas consultas e forneça o melhor para o seu Pet!</h1>
          <Link className="flex text-center justify-center items-center border-2 rounded-3xl border-[#9ED1B7] p-1 xl: basis-1-6 mt-10 xl:h-20 w-96 basis-1/6 text-3xl " to="/">Procure um veterinário próximo!</Link>
        </div>


				<div className="invisible md:flex justify-end content-center basis-1/2 lg:bg-none ">
					<img className="mt-10 invisible md:visible xl:visible w-5/6" src={Dog}/>
				</div>
			</div>

			<div>
				<img className=" w-3/2 mt-5 xl:w-2/4" src={Footprint}/>
			</div>
		</section>
	);
};

