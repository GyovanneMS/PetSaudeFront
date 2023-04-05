import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PetHeader } from './petHeader';
import "../css/UpgradeUser.css"
import addMais from "../resource/img/AddMais.png"
import linha from "../../../assets/svg/linha.svg"
import * as Popover from '@radix-ui/react-popover';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '@stitches/react';
import certo from '../resource/img/Certo.jpg'
import lixeira from '../resource/img/Excluir.png'
import { PetAddSucess } from './cards/sucess';
import * as Dialog from '@radix-ui/react-dialog';
import { PetAddWarn } from './cards/warn';

export const PetConfig = (props) => {

    
    const [name, setName] = useState("Nome")
    function newName(event) {
        setName(event.target.value);
    }
    const [sexo, setSexo] = useState("Sexo")

    const [tamanho, setTamanho] = useState("Tamanho")

    const [specie, setSpecie] = useState("Especie")
    function newSpecie(event) {
        setSpecie(event.target.value);
    }

    const StyledContent = styled(DropdownMenu.Content, {
        minWidth: 130,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 5,
        boxShadow: '0px 5px 15px -5px hsla(206,22%,7%,.15)',
      });
      
      const StyledItem = styled(DropdownMenu.Item, {
        fontSize: 13,
        padding: '5px 10px',
        borderRadius: 3,
        cursor: 'default',
      
        '&:focus': {
          outline: 'none',
          backgroundColor: 'dodgerblue',
          color: 'white',
        },
      });
      
      const StyledArrow = styled(DropdownMenu.Arrow, {
        fill: 'white',
      });

    return (
        <>
            <PetHeader namePerson="Teste" personImage="https://revistapesquisa.fapesp.br/wp-content/uploads/2009/03/SITE_Darwin-4-1140.jpg"/>
            <main className='static'>
                <div>
                    <div className='flex justify-start p-10'>
                    <div className='border-black border-2 w-52 h-52 content-center' style={{ backgroundImage:  'url(https://lh3.googleusercontent.com/p/AF1QipOFbA1h2Y14661Wc3Kvj4C8aS-8syoJAEjqZDxy=w768-h768-n-o-v1)' }}>
                        <img src={addMais} className="rounded-full w-full h-full " />
                    </div>
                        <div className='flex flex-col p-10'>
                            <label>

                                <input type="text" value={name} name="petName" className='bg-transparent border-none md:text-5xl font-medium '/>
                            </label>
                            <img src={linha} alt="" />
                            <label>
                                <input type="text" value={specie}  name="petSpecie" className='bg-transparent border-none text-3xl text-[#A9A9A9]'/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full border-2 rounded-lg border-black flex flex-col gap-10 pl-20 py-8'>
                    <h2 className='font-bold text-6xl font-sans'>Endereço</h2>
                    <div className='flex flex-row justify-between pr-20'>
                        <div className='flex flex-col gap-5 justify-startw-1/2'>
                            <div>
                                <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                    Nome
                                    <input type="text" onBlurCapture={newName} disabled value={props.name} name="nameAnimal" id="nameAnimal" placeholder='Nome' className='bg-transparent placeholder:text-black placeholder:text-3xl border-none text-2xl text-[#000]' />
                                </label>
                            </div>
                            <div>
                                <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                    Sexo
                                    <DropdownMenu.Root className="w-full">
                                        <DropdownMenu.Trigger disabled className='flex justify-start text-black text-3xl'>{props.sexo}</DropdownMenu.Trigger>
                                        <StyledContent disabled>
                                        <StyledItem onSelect={() => setSexo("Feminino")}>Feminino</StyledItem>
                                        <StyledItem onSelect={() => setSexo("Masculino")}>Masculino</StyledItem>
                                        <StyledItem onSelect={() => setSexo("Ginandromorfo")}>Ginandromorfo</StyledItem>
                                        <StyledArrow />
                                        </StyledContent>
                                    </DropdownMenu.Root>
                                </label>
                            </div>
                            <div>
                                <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                    Espécie
                                    <input type="text" disabled onBlurCapture={newSpecie} value={props.specie} name="especieAnimal" id="specisAnimal" placeholder='Espécie' className='bg-transparent placeholder:text-black placeholder:text-3xl border-none text-2xl text-[#000]' />
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 justify-start w-1/2'>
                            <div>
                                <label className='flex flex-col text-xl text-[#A9A9A9] w-1/4'>
                                    Data de Nascimento
                                    <input type="date" disabled name="firstName" value={props.dateBorn} className='bg-transparent border-none text-2xl text-[#000] w-full' />
                                </label>
                            </div>
                            <div>
                                <label className='flex flex-col text-xl text-[#A9A9A9] w-1/4'>
                                    Tamanho
                                    <DropdownMenu.Root disabled className="w-full">
                                        <DropdownMenu.Trigger disabled className='flex justify-start text-black text-3xl'>{props.tamanho}</DropdownMenu.Trigger>
                                        <StyledContent>
                                        <StyledItem onSelect={() => setTamanho("Grande")}>Grande</StyledItem>
                                        <StyledItem onSelect={() => setTamanho("Médio")}>Médio</StyledItem>
                                        <StyledItem onSelect={() => setTamanho("Pequeno")}>Pequeno</StyledItem>
                                        <StyledArrow />
                                        </StyledContent>
                                    </DropdownMenu.Root>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between mb-30'>
                <Dialog.Root>
                        <Dialog.Trigger asChild>
                        <button asChild>
                            <img src={lixeira} alt=""/>
                        </button>
                        </Dialog.Trigger>
                        <Dialog.Portal >
                        <Dialog.Overlay className="DialogOverlay"/>
                        <Dialog.Content className="DialogContent">
                            <PetAddWarn />
                        </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                        <button asChild>
                            <img src={certo} alt=""/>
                        </button>
                        </Dialog.Trigger>
                        <Dialog.Portal >
                        <Dialog.Overlay className="DialogOverlay"/>
                        <Dialog.Content className="DialogContent">
                            <PetAddSucess />
                        </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>
            </main> 
            
        </>
    );
}