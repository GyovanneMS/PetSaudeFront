import React from 'react';
import lapis from "../../../../assets/svg/pencil.svg"

export const Pessoais = (props) => {
    return (

        <>
            <section className='w-full h-full border-4 rounded-lg border-black flex flex-row gap-10 pl-20 py-8'>
                <div>
                <h2 className='text-6xl  font-bold font-sans'>Informações Pessoais</h2>
                <div className='flex flex-row justify-between  pr-26'>
                    
                    <div className='flex flex-col gap-5 mt-10'>
                        <p className=' text-xl text-[#A9A9A9]'> Primeiro nome
                            <div className='text-3xl text-[#000]'>{props.name}</div>
                        </p>
                        <p className=' text-xl text-[#A9A9A9]'> CPF
                            <div className='text-3xl text-[#000]'>{props.cpf}</div>
                        </p>
                        <p className=' text-xl text-[#A9A9A9]'> Celular
                            <div className='text-3xl text-[#000]'> {props.celular}</div>
                        </p>

                    </div>
                
                    <div className='flex flex-col gap-5 mt-10'>
                        <p className='text-xl text-[#A9A9A9]'> Último nome
                            <div className='text-3xl text-[#000]'>{props.lastName}</div>
                        </p>

                        <p className='flexflex-col text-xl text-[#A9A9A9] '> RG
                            <div className='text-3xl text-[#000]'> {props.rg}</div>
                        </p>
                        
                        <p className='text-xl text-[#A9A9A9]'> Telefone
                            <div className='text-3xl text-[#000]'> {props.telefone}</div>
                        </p>
                    </div>
                    <div className='content-start pr-20 mt-10'>
                        <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#ECECEC] rounded-full drop-shadow-lg'>
                            <img src={lapis} alt="" />
                            Editar
                        </button>
                    </div>

                </div>
                    <p className='flex flex-col text-xl text-[#A9A9A9] pt-20'> Bio
                        <span className='text-2xl text-[#000] w-2/4 break-words '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            blandit tincidunt urna sit amet ultricies. Nulla nec turpis ultrices,
                            consequat nunc ut, ultrices purus. Maecenas fermentum, metus sit amet
                            molestie faucibus, justo massa lobortis orci, eget posuere nibh lectus
                            nec elit. Nam blandit placerat semper. Nam vel ultricies mauris. Pellentesque
                            eu imperdiet turpis. Nam congue erat orci, vitae varius eros dictum nec. Suspendisse
                            pharetra nisl sit amet augue suscipit tincidunt. In egestas ex vitae ipsum aliquet
                            porttitor. Cras efficitur dolor est, quis auctor sapien accumsan sed. Morbi tristique vitae quam eu pretium.
                        </span>
                    </p>
                </div>

            </section>

        </>

    );
}
