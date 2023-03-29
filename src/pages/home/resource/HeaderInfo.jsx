import React from "react";
import {Link} from "react-router-dom";
import Photo from '../../../assets/svg/userAnonimo.svg';
import Menu from '../../../assets/svg/leading-icon.svg';
import FootHeader from "../../../assets/svg/FootHeader.svg";


export const HeaderInfo = (props) => {
    return (
        <>
            <div className=" bg-[#9ED1B7] w-full h-full ">
                <div className="flex font-normal items-center justify-around xl:p-5 h-30 text-4xl ">
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

                <div className="flex flex-col justify-items-center text-center p-10 gap-20 ml-80">
                    <div className=" ml-80 flex flex-col justify-center w-1/3 basis-1/4 content-center gap-20">
                        <h1 className=" font-bold text-7xl w-full h-3/4 rounded-lg bg-[#78A890] xl:text-9xl mt-20 ml-80 hidden md:flex"> {props.title}</h1>
                        <p className="md:flex justify-center xl:text-center text-4xl  w-full xl:ml-80 hidden "> {props.description} </p>
                    </div>
                    <img className=" mr-80 pr-20 pt-0 w-full" src={FootHeader}/>
                </div>

            </div>
        </>
    )
};