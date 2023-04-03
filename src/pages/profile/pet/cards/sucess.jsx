import React from 'react';
import sucesso from '../../resource/img/Sucesso.png'

export const PetAddSucess = () => {
    return(
        <div className='w-screen h-screen flex justify-center content-start'>
            <div className='w-1/3 h-96 bg-[#E3EFF0] rounded-3xl drop-shadow-lg flex justify-center content-center flex-col'>
                <h2 className='text-[#78A890] text-6xl flex content-center justify-center'>Sucesso</h2>
                <div className='w-full flex justify-center'>
                    <img src={sucesso} alt="" className='w-40 h-40'/>
                </div>
                <p className='text-[#78A890] text-4xl flex content-center justify-center'>Novo pet registrado</p>
            </div>
        </div>
    );
}