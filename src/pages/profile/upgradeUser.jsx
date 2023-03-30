import React from 'react';
import { Address } from './resource/editUser/address';
import { CardPets } from './resource/editUser/cardPets';
import { Pessoais } from './resource/editUser/infosPerson';
import { Prossionais } from './resource/editUser/infosProfissional';


export const UpgradeUser = () => {


    return (
        <>
            <div>

            </div>
            <Address/>
            <Pessoais name="Hayley" lastName="Williams" cpf="000.000.000-00" rg="000.000.000-00" celular="(88) 88888-8888 " telefone="(88) 88888-8888 "/>
            <CardPets/>
            <Prossionais/>
        </>
    );
}