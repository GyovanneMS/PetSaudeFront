import React from 'react';

import { Config } from '../headerConfig';

export const AddressInfos = () => {
    return (
        <>
            <Config/>
            <main className='p-2'>
                <fieldset class="border border-solid border-black p-3">
                    <legend class="text-sm">CEP</legend>
                    <input type="text" name="cep" className='bg-transparent border-none text-2xl text-[#000]' />
                </fieldset>
                <fieldset class="border border-solid border-black p-3">
                    <legend class="text-sm">Cidade</legend>
                    <input type="text" name="cep" className='bg-transparent border-none text-2xl text-[#000]' />
                </fieldset>
                <fieldset class="border border-solid border-black p-3">
                    <legend class="text-sm">Estado</legend>
                    <input type="text" name="cep" className='bg-transparent border-none text-2xl text-[#000]' />
                </fieldset>
                <fieldset class="border border-solid border-black p-3">
                    <legend class="text-sm">Rua</legend>
                    <input type="text" name="cep" className='bg-transparent border-none text-2xl text-[#000]' />
                </fieldset>
                <fieldset class="border border-solid border-black p-3">
                    <legend class="text-sm">Bairro</legend>
                    <input type="text" name="cep" className='bg-transparent border-none text-2xl text-[#000]' />
                </fieldset>
                <fieldset class="border border-solid border-black p-3">
                    <legend class="text-sm">Número</legend>
                    <input type="text" name="cep" className='bg-transparent border-none text-2xl text-[#000]' />
                </fieldset>
                <fieldset class="border border-solid border-black p-3">
                    <legend class="text-sm">Complemento</legend>
                    <input type="text" name="cep" className='bg-transparent border-none text-2xl text-[#000]' />
                </fieldset>
            </main>
        </>
    );
}