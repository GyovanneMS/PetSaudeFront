import React from 'react';
import formacao from './img/formacao.png'
import formacaoDate from './img/formacaoDate.png'
import instituicao from './img/instituicao.png'
import carreira from './img/carreira.png'

export const AcademicInfos = (props) => {
    return (
        <div className='flex flex-col items-center w-1/3 mt-4'>
            <h2 className="text-3xl mb-3 w-max">
                Informações acadêmicas
            </h2>
            <div className='flex flex-col p-4 w-full h-min gap-4 border rounded-lg border-zinc-700'>
                <div className='flex items-center justify-between gap-x-4 pl-4 border rounded-lg border-zinc-700'>
                    <span className='flex flex-col'>
                        <h3>Formação:</h3>
                        <p>{props.formacao}</p>
                    </span>
                    <img className='p-4 border rounded-lg' src={formacao} />
                </div>
                <div className='flex items-center justify-between border gap-x-4 pl-4 rounded-lg border-zinc-700'>
                    <span className='flex flex-col'>
                        <h3>Data de Formação:</h3>
                        <p>{props.dataFormacao}</p>
                    </span>
                    <img className='p-4 border rounded-lg' src={formacaoDate}  />
                </div>
                <div className='flex items-center border justify-between gap-x-4 pl-4 rounded-lg border-zinc-700'>
                    <span className='flex flex-col'>
                        <h3>Instituição:</h3>
                        <p>{props.instituicao}</p>
                    </span>
                    <img className='py-4 px-[22px] border rounded-lg' src={instituicao}  />
                </div>
                <div className='flex items-center border justify-between rounded-lg gap-x-4 pl-4 border-zinc-700'>
                    <span className='flex flex-col'>
                        <h3>Inicio de Carreira:</h3>
                        <p>{props.carreiraInicio}</p>
                    </span>
                    <img className='p-4 border rounded-lg' src={carreira}  />
                </div>
            </div>
        </div>
    );
}

