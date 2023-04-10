import React from "react";
import {Link} from "react-router-dom";
import {HeaderWeb} from "./resource/HeaderWeb";
import Footprint from "../../assets/svg/petPaws.svg";
import Dog from "../../assets/svg/dogAndCat.svg";
import Doctor from "../../assets/svg/medico 1.svg";
import "./css/LandingPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { ListItem } from "./resource/searchArea";
import { useEffect, useState } from 'react';
import { getVet } from "./testeFunction";
import { FilterByName } from "./filterName";

export const LandingPage = () => {
	useEffect(() => {
		setVeterinario(getVet());
	}, [])
	//https://www.luiztools.com.br/post/tutorial-listagem-com-busca-em-reactjs/


const [veterinario, setVeterinario] = useState([]);

const [searchTerm, setSearchTerm] = useState('');

const jsons = [
  { name: 'João', age: 25 },
  { name: 'Maria', age: 30 },
  { name: 'Pedro', age: 20 },
  { name: 'Ana', age: 27 }
];

const filteredJSONs = jsons.filter((json) => 
	json.name.toLowerCase().includes(searchTerm.toLowerCase())
);

let event = ''; 

const handleChange = (event) => {
	console.log(event.target.value)
  	setSearchTerm(event.target.value);
};


{/* <Container>
{veterinario.map((veterinario, key) => {
	return (
	<ListItem
		key={veterinario.Name}
		Name={veterinario.Name}
		image={veterinario.image}
		bairro={veterinario.bairro}
		formacao={veterinario.formacao}
	/>
	)
})}
</Container> */}

	return (
		<section className="">

			<HeaderWeb/>

			<div className=" flex flex-col pt-20  ml-10 justify-center gap-5 pl-10
    xl:flex-row font-normal texto-2xl  md:flex-row">
				<div  className=" flex flex-row gap-5 bg-white border rounded-lg border-black transition hover:border-green-200 p-5 pl-5 w-80 md:w-1/2 xl:w-1/4">
					<div className="flex flex-row gap-10">
						<img className="w-10" src={Doctor}/>
						<input className=" xl:pt-1 w-full h-full text-2xl" placeholder="Pesquisar especialistas"/>
					</div>
				</div>

				<div className="flex flex-col bg-white border rounded-lg border-black transition hover:border-green-200  p-5 w-80 md:w-1/2 xl:w-1/4 ">
					<div className="flex flex-row gap-10">
						<img className="w-10" src={Doctor}/>
						<input className=" xl:pt-1 w-full h-full text-2xl" placeholder="Pesquisar Veterinários próximos" onChange={handleChange}/>
						<ul>
							{filteredJSONs.map((json, index) => (
								<li key={index}>{json.name}</li>
							))}
      					</ul>	
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between content center w-auto h-4/5 mt-10 ml-10 ">

				<div className=" flex flex-col justify-center items-center w-50 ">
					<h1
						className="basis-2/4 flex justify-center items-center font-bold text-3xl h-20 w-full lg:pl-60 pl-4 xl:text-7xl ">Agende
						suas consultas e forneça o melhor para o seu Pet!</h1>
					<Link
						className="flex text-center justify-center items-center border-2 rounded-xl border-[#9ED1B7] p-1 xl: basis-1-6 mt-10 xl:h-20 w-96 basis-1/6 text-3xl transition hover:bg-[#9ED1B7] hover:text-white hover:shadow-xl hover:scale-110"
						to="/">Procure um veterinário próximo!</Link>
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

