import React from 'react';
import { Address } from './resource/editUser/address';
import { Pessoais } from './resource/editUser/infosPerson';
import { Prossionais } from './resource/editUser/infosProfissional';
import { Config } from './resource/editUser/headerConfig';
import './css/UpgradeUser.css'
import { Pets } from './resource/editUser/allPets';
import Person from '../../assets/svg/Person.svg'
import Cadeado from '../../assets/svg/Lock.svg'
import maleta from '../../assets/svg/Work.svg'

export const UpgradeUser = () => {

<<<<<<< HEAD
    

    return (
        <>
            <div>

            </div>
            <Config hayley="Hayley Williams " user="@HayleyVet"/>
            <main className='flex flex-col md:gap-10'>
                <Pessoais name="Hayley" lastName="Williams" cpf="000.000.000-00" rg="000.000.000-00" celular="(88) 88888-8888 " telefone="(88) 88888-8888" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            blandit tincidunt urna sit amet ultricies. Nulla nec turpis ultrices,
                            consequat nunc ut, ultrices purus. Maecenas fermentum, metus sit amet
                            molestie faucibus, justo massa lobortis orci, eget posuere nibh lectus
                            nec elit. Nam blandit placerat semper. Nam vel ultricies mauris. Pellentesque
                            eu imperdiet turpis. Nam congue erat orci, vitae varius eros dictum nec. Suspendisse
                            pharetra nisl sit amet augue suscipit tincidunt. In egestas ex vitae ipsum aliquet
                            porttitor. Cras efficitur dolor est, quis auctor sapien accumsan sed. Morbi tristique vitae quam eu pretium."/>
                <Address cep="06045-420" bairro="Novo Osasco" rua="Via Transversal Sul" estado="São Paulo" cidade="Osasco" complemento="42B"/>
                
                <Prossionais area="Psiquiatria de Pets" instituicao="USP" dataFormacao="19/03/2005" formacao="Zootecnia" crmv="1234" dataInicioAtuacao="13/02/2006"/>
                <Pets personImage="http://s2.glbimg.com/wbweywCFLC0nCUeg67UbQZWhL7Eu36oRp_QAFsTkIqCqLLlE9GfCYsNrnTRPpEUO/i.glbimg.com/og/ig/f/original/2012/12/14/fabiana1.jpg"/>
            </main>
        </>
    );
=======
    var largura = window.innerWidth

    if(largura <= 768){
        return (
            <>
                <div>HEADER</div>
                <main>
                    <div>
                        <p className='text-base font-bold font-sans'>Configurações</p>
                        <div className='border-2 border-[#CAC4D0] rounded-full py-5 px-5 flex flex-row  '>
                            <div className='flex flex-row  gap-5'>
                                <img src={Person} alt="" />
                                Informações pessoais
                            </div>
                        </div>
                        <div className='border-2 border-[#CAC4D0] rounded-full py-5 px-5 flex flex-row  '>
                            <div className='flex flex-row  gap-5'>
                                <img src={Cadeado} alt="" />
                                Segurança
                            </div>
                        </div>
                        <div>Localização</div>
                    </div>
                    <div>
                        <p>Adicionais</p>
                        <div>Consultas</div>
                        <div>Informações Profissionais</div>
                    </div>
                    <div>Botão sair</div>
                </main>
            </>
        )
    } else {

    if (localStorage.getItem("user") == "veterinario") {
        return (
            <>
                <Config hayley="Hayley Williams " user="@HayleyVet" />
                <main className='flex flex-col gap-10'>
                    <Pessoais name="Hayley" lastName="Williams" cpf="000.000.000-00" rg="000.000.000-00" celular="(88) 88888-8888 " telefone="(88) 88888-8888" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                blandit tincidunt urna sit amet ultricies. Nulla nec turpis ultrices,
                                consequat nunc ut, ultrices purus. Maecenas fermentum, metus sit amet
                                molestie faucibus, justo massa lobortis orci, eget posuere nibh lectus
                                nec elit. Nam blandit placerat semper. Nam vel ultricies mauris. Pellentesque
                                eu imperdiet turpis. Nam congue erat orci, vitae varius eros dictum nec. Suspendisse
                                pharetra nisl sit amet augue suscipit tincidunt. In egestas ex vitae ipsum aliquet
                                porttitor. Cras efficitur dolor est, quis auctor sapien accumsan sed. Morbi tristique vitae quam eu pretium."/>
                    <Address cep="06045-420" bairro="Novo Osasco" rua="Via Transversal Sul" estado="São Paulo" cidade="Osasco" complemento="42B" />

                    <Prossionais area="Psiquiatria de Pets" instituicao="USP" dataFormacao="19/03/2005" formacao="Zootecnia" crmv="1234" dataInicioAtuacao="13/02/2006" />
                </main>
            </>
        );
    } else {
            return (
                <>
                    <div>

                    </div>
                    <Config hayley="Hayley Williams " user="@HayleyVet" />
                    <main className='flex flex-col gap-10'>
                        <Pessoais name="Hayley" lastName="Williams" cpf="000.000.000-00" rg="000.000.000-00" celular="(88) 88888-8888 " telefone="(88) 88888-8888" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                blandit tincidunt urna sit amet ultricies. Nulla nec turpis ultrices,
                                consequat nunc ut, ultrices purus. Maecenas fermentum, metus sit amet
                                molestie faucibus, justo massa lobortis orci, eget posuere nibh lectus
                                nec elit. Nam blandit placerat semper. Nam vel ultricies mauris. Pellentesque
                                eu imperdiet turpis. Nam congue erat orci, vitae varius eros dictum nec. Suspendisse
                                pharetra nisl sit amet augue suscipit tincidunt. In egestas ex vitae ipsum aliquet
                                porttitor. Cras efficitur dolor est, quis auctor sapien accumsan sed. Morbi tristique vitae quam eu pretium."/>
                        <Address cep="06045-420" bairro="Novo Osasco" rua="Via Transversal Sul" estado="São Paulo" cidade="Osasco" complemento="42B" />

                        <Pets personImage="http://s2.glbimg.com/wbweywCFLC0nCUeg67UbQZWhL7Eu36oRp_QAFsTkIqCqLLlE9GfCYsNrnTRPpEUO/i.glbimg.com/og/ig/f/original/2012/12/14/fabiana1.jpg" />
                    </main>
                </>
            )
        }
    }

>>>>>>> 4786c9e (Normal page user)
}