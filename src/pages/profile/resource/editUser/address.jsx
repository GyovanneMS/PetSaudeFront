import React from 'react';
import lapis from "../../../../assets/svg/pencil.svg"

export const Address = (props) => {
    return ( 
        <div className='w-full h-full border-4 rounded-lg border-black flex flex-col gap-10 pl-20 py-8'>
            <h2 className='font-bold text-6xl font-sans'>Endereço</h2>
            <div className='flex flex-row justify-between pr-20'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>CEP</p>
                        <div id='cep' className='text-3xl'> {props.cep} </div>
                    </div>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Bairro</p>
                        <div id='cep' className='text-3xl'> {props.bairro} </div>
                    </div>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Rua</p>
                        <div id='cep' className='text-3xl'> {props.rua}</div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Cidade</p>
                        <div id='cep' className='text-3xl'> {props.cidade} </div>
                    </div>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Estado</p>
                        <div id='estado' className='text-3xl'> {props.estado} </div>
                    </div>
                    <div>
                        <p className='text-xl text-[#A9A9A9]'>Complemento</p>
                        <div id='complemento' className='text-3xl'> {props.complemento} </div>
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
 