import React from 'react';
import { Link } from "react-router-dom";
import Hayley from '../../../../assets/svg/Hayley.svg';
import Home from '../../../../assets/svg/Home.svg';
import Work from '../../../../assets/svg/Work.svg';
import Blog from '../../../../assets/svg/Blog.svg';
import Info from '../../../../assets/svg/InfoOutline.svg';
import Calendary from '../../../../assets/svg/Calendar today.svg';
import Person from '../../../../assets/svg/Person.svg';
import Lock from '../../../../assets/svg/Lock.svg';
import lapis from "../../../../assets/svg/pencil.svg"



export const Config = (props) => {
    return (
      <>
            <div className="flex font-normal items-center justify-around bg-white shadow
    xl:p-5 h-30 text-4xl ">
       <h1 className=" text-1xl sm:flex justify-start font-bold">PetSaúde</h1>
       <button className=" md:hidden py-3 px-4 mx-2 rounded focus:outline-none group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="absolute top-0 -left-full opacity-0 h-screen w-8/12 bg-[#ECECEC] border transform 
            group-focus:left-0 group-focus:opacity-100 transition-all duration-300">
            <h2 className="pt-10 pl-5 text-left  text-2xl font-semibold">Menu</h2>
                <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-5 space-y-3">
                <li className="flex hover:bg-[#9ED1B7]  py-2 px-6 bg-[#D9D9D9] h-30 w-5/6 text-left rounded-full">
                  <img src={Home} className="pr-3"></img>
                  Home
                </li>
                <li className="flex hover:bg-[#9ED1B7] py-2 px-6 bg-[#D9D9D9] h-30 w-5/6 text-left rounded-full">
                <img src={Work} className="pr-3"></img>
                  Profissionais
                </li>
                <li className="flex hover:bg-[#9ED1B7] py-2 px-6 bg-[#D9D9D9] h-30 w-5/6 text-left rounded-full">
                <img src={Blog} className="pr-3"></img>
                  Blog
                </li>
                <li className="flex hover:bg-[#9ED1B7] py-2 px-6 bg-[#D9D9D9] h-30 w-5/6 text-left rounded-full">
                <img src={Info} className="pr-3"></img>
                  Sobre nós
                </li>
                <li className="flex hover:bg-[#9ED1B7] py-2 px-6 bg-[#D9D9D9] h-30 w-5/6 text-left rounded-full">
                <img src={Calendary} className="pr-3"></img>
                  Consultas
                </li>
              </ul>
            <h3 className="pt-5 pl-5 text-left  text-2xl font-semibold">Configurações</h3>
            <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-5 space-y-3">
              <li className="flex hover:bg-[#9ED1B7] py-2 px-6 bg-[#D9D9D9] h-30 w-5/6 text-left rounded-full">
              <img src={Person} className="pr-3"></img>
                Perfil
              </li>
              <li className="flex hover:bg-[#9ED1B7] py-2 px-6 bg-[#D9D9D9] h-30 w-5/6 text-left rounded-full">
              <img src={Lock} className="pr-3"></img>
                Segurança
              </li>
            </ul>
          </div>
          </button>
       
       <div className=" w-10 md:flex flex-direction " >
       <img className="pt-10 pr-1 md:pt-1 " src={Hayley} />
        <Link to="../login" className=" invisible xl:visible home-btn p-1 ">
        {props.hayley}
        </Link>
        </div>
    </div>
    <div className='flex'>
        <img src={Hayley}></img>
        <div>
            <h3 className='text-5xl font-semibold'>@HayleyVet</h3>
            <p className='pl-5 text-3xl text-[#A9A9A9]'>Hayley Williams</p>
        </div>
        
        <div className='content-start pr-20 mt-10'>
                        <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#ECECEC] rounded-full drop-shadow-lg'>
                            <img src={lapis} alt="" />
                            Editar
                        </button>
        </div>
    </div>
      </>
    
    )
};