import React from 'react';
import { Address } from './resource/editUser/address';
import { Pessoais } from './resource/editUser/infosPerson';
import { Prossionais } from './resource/editUser/infosProfissional';
import './css/UpgradeUser.css'
import { Pets } from './resource/editUser/allPets';

export const UpgradeUser = () => {


    return (
        <>
            <div>

            </div>
            <main className='flex flex-col gap-10'>
                <Address cep="06045-420" bairro="Novo Osasco" rua="Via Transversal Sul" estado="São Paulo" cidade="Osasco" complemento="42B"/>
                <Pessoais name="Hayley" lastName="Williams" cpf="000.000.000-00" rg="000.000.000-00" celular="(88) 88888-8888 " telefone="(88) 88888-8888 "/>
                <Pets personImage="http://s2.glbimg.com/wbweywCFLC0nCUeg67UbQZWhL7Eu36oRp_QAFsTkIqCqLLlE9GfCYsNrnTRPpEUO/i.glbimg.com/og/ig/f/original/2012/12/14/fabiana1.jpg"/>
                <Prossionais area="Psiquiatria de Pets" instituicao="USP" dataFormacao="19/03/2005" formacao="Zootecnia" crmv="1234" dataInicioAtuacao="13/02/2006"/>
            </main>
        </>
    );
}