import React from 'react';
import lapis from "../../../../assets/svg/pencil.svg"

export const Pessoais = (props) => {
    return (

        <>
            <section className='w-full h-full border-none sm:border-solid border-4 rounded-lg border-black flex flex-col gap-10 md:pl-20 py-8'>
            <h2 className='text-5xl md:text-6xl font-bold font-sans text-center sm:text-start'>Informações Pessoais</h2>
                <div className='flex flex-row'>
                    <div className='flex flex-row justify-between w-full sm:w-3/5 pr-0 sm:pr-12'> 
                        <div className='gap-1 sm:gap-5 mt-10 grid grid-cols-1 sm:grid-cols-2 justify-between'>
                                <div className=''>
                                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                        Primeiro nome
                                        <input type="text" name="firstName" value={props.name} className='bg-transparent border-none text-2xl text-[#000]' />
                                    </label> 
                                </div>
                                <div className=''>
                                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                        Sobrenome
                                        <input type="text" name="firstName" value={props.lastName} className='bg-transparent border-none text-2xl text-[#000]' />
                                    </label>
                                </div>
                                <div className=''>
                                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                    CPF
                                        <input type="text" name="firstName" value={props.cpf} className='bg-transparent border-none text-2xl text-[#000]' />
                                    </label>
                                </div>
                                <div className=''>
                                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                        RG
                                        <input type="text" name="firstName" value={props.rg} className='bg-transparent border-none text-2xl text-[#000]' />
                                    </label>
                                </div>
                                <div className=''>
                                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                        Celular
                                        <input type="text" name="firstName" value={props.celular} className='bg-transparent border-none text-2xl text-[#000]' />
                                    </label>
                                </div>
                                <div className=''>
                                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                    Telefone
                                        <input type="text" name="firstName" value={props.telefone} className='bg-transparent border-none text-2xl text-[#000]' />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='hidden sm:flex flex-col content-end aling-end'>
                        <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#ECECEC] rounded-full drop-shadow-lg'>
                            <img src={lapis} alt="" />
                            Editar
                        </button>
                    </div>
                </div>    
                <div>
                    <p className='flex flex-col text-xl text-[#A9A9A9] pt-3 sm:pt-20'> Bio
                        <span className='text-2xl text-[#000] w-full p-2 sm:w-2/4 break-words text-justify'>
                            {props.text}
                        </span>
                    </p>
                </div>

            </section>

        </>

    );
}
