import React from "react";
import imageAdress from '../../../assets/imageAdress.svg'
import { Link } from "react-router-dom";

export function NewAdress() {
    return (

        <div className='flex flex-row w-screen h-screen'>
            <div className='flex justify-center content-center basis-1/2 w-1/2 bg-gradient-to-br from-[#092B5A] to-[#9ED1B7]'>
                <img src={imageAdress} alt="Login with Google account" className="h-full w-full"/>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 basis-1/2 p-20 bg-[#FFFFFF]" >
                <div className="w-full flex flex-col gap-5 px-10 items-center">
                    <div className=" flex flex-col justify-center items-center w-full">
                        <h1 className="text-4xl font-semibold"> Podemos saber sua localização? </h1>
                        <p className="text-sm text-gray-400/75"> Para a experiência na plataforma, informe-nos a sua localização </p>
                    </div>
                    <div className="flex flex-row w-5/6">
                        <form >
                            <label className="flex flex-col gap-4 text-xl min-w-full">
                                CEP
                                <input type="text" className="border-b-2 border-gray-700 min-w-full"/>
                            </label>
                        </form>
                    </div>
                    <div className="flex flex-row gap-9 w-5/6">
                        <form className="flex min-w-1/2 gap-4 basis-1/2">
                            <label className="flex flex-col basis-1/2 min-w-full text-xl basis-1/2 gap-4">
                                Cidade
                                <input type="text" className="border-b-2 border-gray-700"/>
                            </label>
                        </form >
                        <form className="flex min-w-1/2 gap-4 basis-1/2">
                            <label className="flex flex-col basis-1/2 min-w-full text-xl basis-1/2 gap-4">
                                Estado
                                <input type="text" className="border-b-2 border-gray-700"/>
                            </label>
                        </form>
                    </div>
                    <div className="flex flex-row w-5/6">
                        <form >
                            <label className="flex flex-col gap-4 text-xl min-w-full">
                                Rua
                                <input type="text" className="border-b-2 border-gray-700 min-w-full"/>
                            </label>
                        </form>
                    </div>
                    <div className="flex flex-row w-5/6">
                        <form >
                            <label className="flex flex-col gap-4 text-xl min-w-full">
                                Bairro
                                <input type="text" className="border-b-2 border-gray-700 min-w-full"/>
                            </label>
                        </form>
                    </div>
                    <div className="flex flex-row gap-9 w-5/6">
                        <form className="flex min-w-1/2 gap-4 basis-1/2 ">
                            <label className="flex flex-col basis-1/2 min-w-full text-xl basis-1/2 gap-4">
                                Número
                                <input type="text" className="border-b-2 border-gray-700"/>
                            </label>
                        </form >
                        <form className="flex min-w-1/2 gap-4 basis-1/2">
                            <label className="flex flex-col basis-1/2 min-w-full text-xl basis-1/2 gap-4">
                                Complemento (se houver)
                                <input type="text" className="border-b-2 border-gray-700"/>
                            </label>
                        </form>
                    </div>
               </div>
               <div className="w-full h-1/4 flex items-center justify-center gap-10 ">
                    <button className="w-50 h-20 bg-[#78A890] px-10 shadow-xl rounded-lg text-[#FFFFFF] font-bold">
                        Cadastrar cliente
                    </button>
                    <button className="w-50 h-20 bg-[#09738A] px-10 shadow-xl rounded-lg text-[#FFFFFF] font-bold">
                        Cadastrar profissional
                    </button>
                </div>
                <div className="w-full h-10 flex flex-row gap-1 justify-center">
                    <p>
                        Já tem uma conta?   
                    </p>
                    <Link to="/">
                        <p className="font-bold">
                            Faça Login
                        </p>
                    </Link>
                </div>
            </div>
        </div>

    )

}