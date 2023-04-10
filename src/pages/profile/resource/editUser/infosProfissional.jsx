import React from 'react';
import lapis from "../../../../assets/svg/pencil.svg"

{/* 
<label className='flex flex-col text-xl text-[#A9A9A9]'>
    Celular
    <input type="text" name="firstName" value={props.celular} className='bg-transparent border-none text-3xl text-[#000]' />
</label> 
*/
}

export const Prossionais = (props) => {
    return ( 
        <div className='w-full h-full border-none sm:border-solid border-2 rounded-lg border-black flex flex-col gap-10 pl-2 sm:pl-20 py-8'>
            <h2 className='text-5xl md:text-6xl font-bold font-sans text-center sm:text-start'>Informações Profissonais</h2>
            <div className='flex flex-row justify-between '>
                <div className='gap-1 sm:gap-5 mt-10 grid grid-cols-1 sm:grid-cols-2 pr-0 sm:pr-16 justify-between w-full sm:w-4/5'>
                    <div className=''>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Área de Atuação
                            <input type="text" id='cep' name="area" value={props.area} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
                    </div>
                    <div className=''>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Formação
                            <input type="text" id='cep' name="area" value={props.formacao} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
                    </div>
                    <div className=''>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Instituição
                            <input type="text" id='cep' name="area" value={props.instituicao} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
                    </div>
                    <div className=''>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            CRMV
                            <input type="text" id='cep' name="area" value={props.crmv} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
                    </div>
                    <div className=''>
                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Data de Formação
                            <input  type="text" id='cep' name="area" value={props.dataFormacao} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
                    </div>
                    <div className=''>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                        Início de atuação
                            <input type="text" id='cep' name="area" value={props.dataInicioAtuacao} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
                    </div>
                </div>
                <div className='hidden sm:flex flex-col content-end aling-end  '>
                    <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#ECECEC] rounded-full drop-shadow-lg'>
                        <img src={lapis} alt="" />
                        Editar
                    </button>
                </div>
            </div>
        </div>
    );
}
 