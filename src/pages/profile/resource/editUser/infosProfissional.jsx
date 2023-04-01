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
        <div className='w-full h-full border-2 rounded-lg border-black flex flex-col gap-10 pl-20 py-8'>
<<<<<<< HEAD
            <h2 className='font-bold text-6xl font-sans'>Informações profissonais</h2>
            <div className='flex flex-row justify-between pr-20'>
                <div className='flex flex-col gap-5'>
                    <div>
                  
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Área de Atuação
                            <input type="text" name="firstName" value={props.area} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
=======
            <h2 className='font-bold text-6xl font-sans'>Informações Profissonais</h2>
            <div className='flex flex-row justify-between pr-20'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Área de Atuação
                            <input type="text" id='cep' name="area" value={props.area} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
>>>>>>> 4786c9e (Normal page user)
                    </div>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Instituição
<<<<<<< HEAD
                            <input type="text" name="firstName" value={props.instituicao} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
                    </div>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                           Data de formação
                            <input type="text" name="firstName" value={props.dataFormacao} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
=======
                            <input type="text" id='cep' name="area" value={props.instituicao} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
                    </div>
                    <div>
                    <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Data de Formação
                            <input type="text" id='cep' name="area" value={props.dataFormacao} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
>>>>>>> 4786c9e (Normal page user)
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Formação
<<<<<<< HEAD
                            <input type="text" name="firstName" value={props.formacao} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
=======
                            <input type="text" id='cep' name="area" value={props.formacao} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
>>>>>>> 4786c9e (Normal page user)
                    </div>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            CRMV
<<<<<<< HEAD
                            <input type="text" name="firstName" value={props.crmv} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
                    </div>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                            Início de atuação
                            <input type="text" name="firstName" value={props.dataInicioAtuacao} className='bg-transparent border-none text-2xl text-[#000]' />
                        </label>
=======
                            <input type="text" id='cep' name="area" value={props.crmv} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
                    </div>
                    <div>
                        <label className='flex flex-col text-xl text-[#A9A9A9]'>
                        Início de atuação
                            <input type="text" id='cep' name="area" value={props.dataInicioAtuacao} disabled className='bg-transparent border-none text-3xl text-[#000]' />
                        </label> 
>>>>>>> 4786c9e (Normal page user)
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
 