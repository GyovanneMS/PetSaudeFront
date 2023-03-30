import React from 'react';
import formacao from './img/formacao.png'
import formacaoDate from './img/formacaoDate.png'
import instituicao from './img/instituicao.png'
import carreira from './img/carreira.png'

export const AcademicInfos = () => {
    return (
        <div className='px-44 m-4'>
            <h2 className="text-3xl mb-3">
                Informações acadêmicas
            </h2>
            <div className='flex flex-col gap w-1/2 h-full border rounded-lg border-zinc-700'>
                <div className='flex items-center border rounded-lg border-zinc-700'>
                    <span className='flex flex-col'>
                        <h3>Formação</h3>
                        <p></p>
                    </span>
                    <img className='p-4 border rounded-lg border-zinc-700' src={formacao} />
                </div>
                <div className='flex items-center border rounded-lg border-zinc-700'>
                    <span className='flex flex-col'>
                        <h3>Data de Formação</h3>
                        <p></p>
                    </span>
                    <img className='p-4 border rounded-lg border-zinc-700' src={formacaoDate}  />
                </div>
                <div className='flex items-center border rounded-lg border-zinc-700'>
                    <span className='flex flex-col'>
                        <h3>Instituição</h3>
                        <p></p>
                    </span>
                    <img className='p-4 border rounded-lg border-zinc-700' src={instituicao}  />
                </div>
                <div className='flex items-center border rounded-lg border-zinc-700'>
                    <span className='flex flex-col'>
                        <h3>Inicio de Carreira</h3>
                        <p></p>
                    </span>
                    <img className='p-4 border rounded-lg border-zinc-700' src={carreira}  />
                </div>
            </div>
        </div>
    );
}

