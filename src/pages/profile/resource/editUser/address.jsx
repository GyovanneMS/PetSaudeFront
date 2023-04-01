import React from 'react';
import lapis from "../../../../assets/svg/pencil.svg"

export const Address = (props) => {
    return ( 
        <div className='w-full h-full border-2 rounded-lg border-black flex flex-col gap-10 pl-20 py-8'>
            <h2 className='font-bold text-6xl font-sans'>Endereço</h2>
            <div className='flex flex-row justify-between pr-20'>
                <div className='flex flex-col gap-5'>
                    <div>
                        
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            CEP
                            <input type="text" name="firstName" value={props.cep} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
                    </div>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Bairro
                            <input type="text" name="firstName" value={props.bairro} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
                    </div>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Rua
                            <input type="text" name="firstName" value={props.rua} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Cidade
                            <input type="text" name="firstName" value={props.cidade} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
                    </div>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Estado
                            <input type="text" name="firstName" value={props.estado} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
                    </div>
                    <div>
                    
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Complemento
                            <input type="text" name="firstName" value={props.complemento} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
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
 