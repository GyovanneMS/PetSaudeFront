import React from 'react';
// import { Link } from 'react-router-dom';

export const Pessoais = (props) => {
    return (

        <>
            <section className='border-2 m-20 border-black'>
                <h2 className='text-5xl text-start p-10 font-semibold'>Informações Pessoais</h2>
                <div className='flex space-x-20'>
                    <p className='flex flex-col text-xl text-[#A9A9A9]'> Primeiro nome
                        <div className='text-3xl text-[#000]'>{props.name}</div>
                    </p>
                    <p className='flex justify-center flex-col text-[#A9A9A9]'> Último nome
                        <div className='text-3xl text-[#000]'> {props.lastName}</div>
                    </p>

                </div>
                <div className='flex space-x-20 '>
                    <p className='flex justify-center flex-col text-xl text-[#A9A9A9]'> CPF
                        <div className='text-3xl text-[#000]'>{props.cpf}</div>
                    </p>

                    <p className='flex justify-center flex-col text-xl text-[#A9A9A9]'> RG
                        <div className='text-3xl text-[#000]'> {props.rg}</div>
                    </p>
                </div>

                <div className='flex space-x-20 '>
                    <p className='flex flex-col text-xl text-[#A9A9A9]'> Celular
                        <div className='text-3xl text-[#000]'> {props.celular}</div>
                    </p>

                    <p className='flex flex-col text-xl text-[#A9A9A9]'> Telefone
                        <div className='text-3xl text-[#000]'> {props.telefone}</div>
                    </p>
                </div>
                <p className='flex flex-col text-xl text-[#A9A9A9]'> Celular
                    <span className='text-3xl text-[#000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                        blandit tincidunt urna sit amet ultricies. Nulla nec turpis ultrices,
                        consequat nunc ut, ultrices purus. Maecenas fermentum, metus sit amet
                        molestie faucibus, justo massa lobortis orci, eget posuere nibh lectus
                        nec elit. Nam blandit placerat semper. Nam vel ultricies mauris. Pellentesque
                        eu imperdiet turpis. Nam congue erat orci, vitae varius eros dictum nec. Suspendisse
                        pharetra nisl sit amet augue suscipit tincidunt. In egestas ex vitae ipsum aliquet
                        porttitor. Cras efficitur dolor est, quis auctor sapien accumsan sed. Morbi tristique vitae quam eu pretium.
                    </span>
                </p>
            </section>

        </>

    );
}
