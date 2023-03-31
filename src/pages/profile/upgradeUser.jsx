import React from 'react';
import { Address } from './resource/editUser/address';
import { Pessoais } from './resource/editUser/infosPerson';
import { Prossionais } from './resource/editUser/infosProfissional';
import { Config } from './resource/editUser/headerConfig';
import './css/UpgradeUser.css'
import { Pets } from './resource/editUser/allPets';


export const UpgradeUser = () => {


    return (
        <>
            <div>

            </div>
            <Config hayley="Hayley Williams " user="@HayleyVet"/>
            <main className='flex flex-col gap-10'>
                <Pessoais name="Hayley" lastName="Williams" cpf="000.000.000-00" rg="000.000.000-00" celular="(88) 88888-8888 " telefone="(88) 88888-8888" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            blandit tincidunt urna sit amet ultricies. Nulla nec turpis ultrices,
                            consequat nunc ut, ultrices purus. Maecenas fermentum, metus sit amet
                            molestie faucibus, justo massa lobortis orci, eget posuere nibh lectus
                            nec elit. Nam blandit placerat semper. Nam vel ultricies mauris. Pellentesque
                            eu imperdiet turpis. Nam congue erat orci, vitae varius eros dictum nec. Suspendisse
                            pharetra nisl sit amet augue suscipit tincidunt. In egestas ex vitae ipsum aliquet
                            porttitor. Cras efficitur dolor est, quis auctor sapien accumsan sed. Morbi tristique vitae quam eu pretium."/>
                <Address cep="06045-420" bairro="Novo Osasco" rua="Via Transversal Sul" estado="São Paulo" cidade="Osasco" complemento="42B"/>
                <Pets personImage="http://s2.glbimg.com/wbweywCFLC0nCUeg67UbQZWhL7Eu36oRp_QAFsTkIqCqLLlE9GfCYsNrnTRPpEUO/i.glbimg.com/og/ig/f/original/2012/12/14/fabiana1.jpg"/>
                <Prossionais area="Psiquiatria de Pets" instituicao="USP" dataFormacao="19/03/2005" formacao="Zootecnia" crmv="1234" dataInicioAtuacao="13/02/2006"/>
            </main>
        </>
    );
}