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
            <Address/>
            <Pessoais name="Hayley" lastName="Williams" cpf="000.000.000-00" rg="000.000.000-00" celular="(88) 88888-8888 " telefone="(88) 88888-8888" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tincidunt urna sit amet ultricies. Nulla nec turpis ultrices, consequat nunc ut, ultrices purus. Maecenas fermentum, metus sit amet molestie faucibus, justo massa lobortis orci, eget posuere nibh lectus nec elit. Nam blandit placerat semper. Nam vel ultricies mauris. Pellentesque eu imperdiet turpis. Nam congue erat orci, vitae varius eros dictum nec. Suspendisse pharetra nisl sit amet augue suscipit tincidunt. In egestas ex vitae ipsum aliquet porttitor. Cras efficitur dolor est, quis auctor sapien accumsan sed. Morbi tristique vitae quam eu pretium.
"/>
            <CardPets/>
            <Prossionais/>
        </>
    );
}