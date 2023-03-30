import React from 'react';
import { Address } from './resource/editUser/address';
import { CardPets } from './resource/editUser/cardPets';
import { Pessoais } from './resource/editUser/infosPerson';
import { Prossionais } from './resource/editUser/infosProfissional';
import './css/UpgradeUser.css'

export const UpgradeUser = () => {


    return (
        <>
            <div>

            </div>
            <main>
                <Pessoais/>
                <Address cep="06045-420" bairro="Novo Osasco" rua="Via Transeversal Sul" cidade="Osasco" estado="São Paulo" complemento="46B"/>
                <CardPets id=""/>
                <Prossionais area="Psiquiatria de Pets" instituicao="USP" dataFormacao="20/09/2006" formacao="Zootecnia" crmv="1111" dataInicioAtuacao="20/08/2007"/>
            </main>
        </>
    );
}