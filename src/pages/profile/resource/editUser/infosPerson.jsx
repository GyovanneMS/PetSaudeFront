import React from 'react';
import lapis from "../../../../assets/svg/pencil.svg"

export const Pessoais = (props) => {
    return (

        <>
            <section className='w-full h-full border-2 rounded-lg border-black flex flex-row gap-10 pl-20 py-8'>
                <div>
                <h2 className='text-6xl  font-bold font-sans'>Informações Pessoais</h2>
                <div className='flex flex-row justify-between  pr-26'>
                    
                    <div className='flex flex-col gap-5 mt-10'>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Primeiro nome
                            <input type="text" name="firstName" value={props.name} className='bg-transparent border-none text-3xl text-[#000]' />
                        </label>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                           CPF
                            <input type="text" name="firstName" value={props.cpf} className='bg-transparent border-none text-3xl text-[#000]' />
                        </label>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Celular
                            <input type="text" name="firstName" value={props.celular} className='bg-transparent border-none text-3xl text-[#000]' />
                        </label>

                    </div>
                
                    <div className='flex flex-col gap-5 mt-10'>
                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Último nome
                            <input type="text" name="firstName" value={props.lastName} className='bg-transparent border-none text-3xl text-[#000]' />
                        </label>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            RG
                            <input type="text" name="firstName" value={props.rg} className='bg-transparent border-none text-3xl text-[#000]' />
                        </label>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Telefone
                            <input type="text" name="firstName" value={props.telefone} className='bg-transparent border-none text-3xl text-[#000]' />
                        </label>
                    </div>
                    <div className='content-start pr-20 mt-10'>
                        <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#ECECEC] rounded-full drop-shadow-lg'>
                            <img src={lapis} alt="" />
                            Editar
                        </button>
                    </div>

                </div>
                    <p className='flex flex-col text-xl text-[#A9A9A9] pt-20'> Bio
                        <span className='text-2xl text-[#000] w-2/4 break-words '>
                        <input type="text" name="firstName" value={props.text} className='bg-transparent border-none w-full h-full' />
    
                        </span>
                    </p>
                </div>

            </section>

        </>

    );
}
