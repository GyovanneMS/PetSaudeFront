import React from 'react';
import { Address } from './resource/editUser/address';
import { CardPets } from './resource/editUser/cardPets';
import { Pessoais } from './resource/editUser/infosPerson';
import { Prossionais } from './resource/editUser/infosProfissional';


export const UserEdit = () => {


    return (
        <>
            <div>

            </div>
            <Address/>
            <Pessoais/>
            <CardPets/>
            <Prossionais/>
        </>
    );
}