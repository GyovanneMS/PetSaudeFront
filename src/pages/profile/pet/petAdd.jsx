import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PetHeader } from './petHeader';
import "../css/UpgradeUser.css"
import addFile from "../resource/img/NeedAdd.png"
import linha from "../../../assets/svg/linha.svg"
import * as Popover from '@radix-ui/react-popover';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '@stitches/react';
import certo from '../resource/img/Certo.jpg'
import { PetAddSucess } from './cards/sucess';
import * as Dialog from '@radix-ui/react-dialog';
import { petAdd } from "../../../services/integrations/pet.js";


export const PetAdd = (props) => {

    const [name, setName] = useState("Nome")
    function newName(event) {
        setName(event.target.value);
    }

    const [sexo, setSexo] = useState("Sexo")

    const [bornDate, setBornDate] = useState("DataDeNascimento")
    function newBornDate(event) {
        setBornDate(event.target.value);
    }

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

    const submitPet = async data => {
        const petInfos = {
            name: name,
            birthDate: bornDate,
            photo: '',
            microship: false,
            size: tamanho,
            gender: sexo,
            specie: specie,
            ownerID: 1
        }

        console.log(petInfos)

        const addPet = await petAdd(petInfos)
        console.log(addPet)
    }

    return (
        <>
            <PetHeader namePerson="Teste" personImage="https://revistapesquisa.fapesp.br/wp-content/uploads/2009/03/SITE_Darwin-4-1140.jpg"/>
            <main className='static'>
                <div>
                    <div className='flex justify-start p-10'>
                    <div className='border-black border-2 w-52 h-52 '>
                    <img src={addFile} className="rounded-full" />
                    </div>
                        <div className='flex flex-col p-10'>
                            <label>

                                <input type="text" value={name} disabled name="petName" className='bg-transparent border-none md:text-5xl font-medium '/>
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
                                    <input type="text" onBlurCapture={newName}  name="nameAnimal" id="nameAnimal" placeholder='Nome' className='bg-transparent placeholder:text-black placeholder:text-3xl border-none text-2xl text-[#000]' />
                                </label>
                            </div>
                            <div>
                                <label className='flex flex-col text-xl text-[#A9A9A9]'>
                                    Sexo
                                    <DropdownMenu.Root className="w-full">
                                        <DropdownMenu.Trigger className='flex justify-start text-black text-3xl'>{sexo}</DropdownMenu.Trigger>
                                        <StyledContent>
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
                                    <input type="text" onBlurCapture={newSpecie} name="especieAnimal" id="specisAnimal" placeholder='Espécie' className='bg-transparent placeholder:text-black placeholder:text-3xl border-none text-2xl text-[#000]' />
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 justify-start w-1/2'>
                            <div>
                                <label className='flex flex-col text-xl text-[#A9A9A9] w-1/4'>
                                    Data de Nascimento
                                    <input type="date" onBlurCapture={newBornDate}  name="firstName" className='bg-transparent border-none text-2xl text-[#000] w-full' />
                                </label>
                            </div>
                            <div>
                                <label className='flex flex-col text-xl text-[#A9A9A9] w-1/4'>
                                    Tamanho
                                    <DropdownMenu.Root className="w-full">
                                        <DropdownMenu.Trigger className='flex justify-start text-black text-3xl'>{tamanho}</DropdownMenu.Trigger>
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
                <div className='w-full flex justify-end mb-30'>
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                        <button asChild onClick={submitPet}>
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