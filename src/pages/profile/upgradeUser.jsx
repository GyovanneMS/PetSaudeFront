import React from 'react';
import { Link } from 'react-router-dom';
import { Address } from './resource/editUser/address';
import { Pessoais } from './resource/editUser/infosPerson';
import { Prossionais } from './resource/editUser/infosProfissional';
import './css/UpgradeUser.css';
import { Pets } from './resource/editUser/allPets';
import Person from '../../assets/svg/Person.svg';
import Cadeado from '../../assets/svg/Lock.svg';
import Work from '../../assets/svg/Work.svg';
import Calendary from '../../assets/svg/calendary.svg';
import Local from '../../assets/svg/Gps.svg';
import Logout from '../../assets/svg/Logout.svg';
import { Config } from "./resource/editUser/headerConfig.jsx";
import Arrow from '../../assets/svg/Arrow.svg';




export const UpgradeUser = () => {

    var largura = window.innerWidth

    if (largura <= 768) {

        return (
            <>
                <Config />

                <main>
                    <div>
                        <p className=' font-bold font-sans  h-10 text-2xl'>Configurações</p>
                        <div className='border-2 border-[#CAC4D0] rounded-full py-5 px-5 flex flex-row  mt-2'>
                            <div className='flex flex-row  gap-5'>
                                <img src={Person} alt="" />
                                Informações pessoais

                                <Link>
                                    <img className='pl-16' src={Arrow} alt="" />
                                </Link>

                            </div>
                        </div>
                        <div className='border-2 border-[#CAC4D0] rounded-full py-5 px-5 flex flex-row  mt-2'>
                            <div className='flex flex-row  gap-5'>
                                <img src={Cadeado} alt="" />
                                Segurança

                                <Link>
                                    <img className='pl-36' src={Arrow} alt="" />
                                </Link>

                            </div>
                        </div>
                        <div className='border-2 border-[#CAC4D0] rounded-full py-5 px-5 flex flex-row  mt-2'>
                            <div className='flex flex-row  gap-5'>
                                <img src={Local} alt="" />
                            Localização

                            <Link>
                                    <img className='pl-36' src={Arrow} alt="" />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div>
                        <p className=' font-bold font-sans  h-10 text-2xl pt-10'>Adicionais</p>
                        <div className='border-2 border-[#CAC4D0] rounded-full py-5 px-5 flex flex-row mt-10'>
                            <div className='flex flex-row  gap-5'>
                                <img src={Calendary} alt="" />
                            Consultas

                            <Link>
                                    <img className='pl-36' src={Arrow} alt="" />
                                </Link>

                            </div>

                        </div>
                        <div className='border-2 border-[#CAC4D0] rounded-full py-5 px-5 flex flex-row mt-2 '>
                            <div className='flex flex-row  gap-5'>
                                <img src={Work} alt="" />
                                Informações Profissionais

                                <Link>
                                    <img className='pl-10' src={Arrow} alt="" />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-[#B3261E] rounded-full py-5 px-5 flex flex-row  mt-10 text-[#B3261E] font-semibold'>
                        <div className='flex flex-row  gap-5'>
                            <img src={Logout} alt="" />
                            Sair
                        </div>
                    </div>
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

}