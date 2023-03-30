import React from 'react';
import formacao from './img/formacao.png'
import formacaoDate from './img/formacaoDate.png'
import instituicao from './img/instituicao.png'
import carreira from './img/carreira.png'

export const AcademicInfos = () => {
    return (
        <div className='m-4'>
            <h2 className="text-xl mb-3">
                Informações acadêmicas
            </h2>
            <div className='w-8 h-8 border rounded-lg border-zinc-700'>
                <div>
                    <span>
                        <h3></h3>
                        <p></p>
                    </span>
                    <img src={formacao} alt="" />
                </div>
                <div>
                    <span>
                        <h3></h3>
                        <p></p>
                    </span>
                    <img src={formacaoDate} alt="" />
                </div>
                <div>
                    <span>
                        <h3></h3>
                        <p></p>
                    </span>
                    <img src={instituicao} alt="" />
                </div>
                <div>
                    <span>
                        <h3></h3>
                        <p></p>
                    </span>
                    <img src={carreira} alt="" />
                </div>
            </div>
        </div>
    );
}

