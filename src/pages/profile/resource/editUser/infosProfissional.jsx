import React from 'react';
import lapis from "../../../../assets/svg/pencil.svg"

export const Prossionais = (props) => {
    return ( 
        <div className='w-full h-full border-4 rounded-lg border-black flex flex-col gap-10 pl-20 py-8'>
            <h2 className='font-bold text-6xl font-sans'>Dados Profissonais</h2>
            <div className='flex flex-row justify-between pr-20'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Área de Atuação</p>
                        <div id='cep' className='text-3xl'> {props.area} </div>
                    </div>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Instituição</p>
                        <div id='cep' className='text-3xl'> {props.instituicao} </div>
                    </div>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Data de formação</p>
                        <div id='cep' className='text-3xl'> {props.dataFormacao}</div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Formação</p>
                        <div id='cep' className='text-3xl'> {props.formacao} </div>
                    </div>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>CRMV</p>
                        <div id='estado' className='text-3xl'> {props.crmv} </div>
                    </div>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Início de atuação</p>
                        <div id='complemento' className='text-3xl'> {props.dataInicioAtuacao} </div>
                    </div>
                </div>
                <div className='flex flex-col content-start'>
                    <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#ECECEC] rounded-full drop-shadow-lg'>
                        <img src={lapis} alt="" />
                        Editar
                    </button>
                </div>
            </div>
        </div>
    );
}
 