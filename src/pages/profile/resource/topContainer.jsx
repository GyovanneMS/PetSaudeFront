import React, { useState } from 'react';
import iconVet from './img/iconVet.png'
import * as Dialog from '@radix-ui/react-dialog';
import { Appointment } from './appointment/appointment';
import '../../profile/pet/css/pet.css'

//import TextTruncate from 'react-text-truncate';



export const TopContainer = (props) => {

    const [biografia, setBiografia] = useState("truncate")
    const [lerMais, setLerMais] = useState("")
    const [lerMenos, setLerMenos] = useState("hidden")

    const textTruncate = () => {

        const biografia = document.getElementById('biografia')

        if (biografia.classList.contains("truncate")) {
            setBiografia("")
            setLerMais("hidden")
            setLerMenos("")

        }
        else {
            setBiografia("truncate")
            setLerMais("")
            setLerMenos("hidden")
        }

    }

    if (localStorage.getItem('__register_type') === "professional") {
        
        return (
            <div className='flex flex-col items-center md:px-44'>
                <img src={props.profilePhoto} className='w-full md:max-h-[400px] rounded-b-lg ' />
                <div className='self-start w-full z-10 mt-[-80px] px-9'>
                    <img src={props.userPhoto} className=" flex relative border-4 h-48 border-white border-solid rounded-full" />
                    <div className='flex flex-col md:flex-row justify-between w-full md:mt-16'>
                        <div className='flex md:flex-row items-center gap-1 pt-5'>
                            <p className='text-4xl'>{props.name}</p>
                            <img src={iconVet} />
                        </div>

                        <div className='flex justify-center p-5'>
                            <div className='flex border h-36'>
                                <input className=' bg-white' placeholder=' Total de consultas'/>
                            </div>
                            <div className='flex  h-36 pl-2'>
                                <input className='bg-[#91B0B2] text-[#09738A]' placeholder=' Total de consultas'/>
                            </div>
                        </div>
                      
                        <Dialog.Root>
                        <Dialog.Trigger asChild>
                        <div className='pt-2 md:pt-0'>
                            <button className='bg-lime-500 rounded-md px-3 py-2 text-2xl w-full md:text-4xl md:w-96 shadow-lg justify-center self-center'>
                                Agendar uma consulta
                            </button>
                        </div>
                         
                        </Dialog.Trigger>
                        <Dialog.Portal >
                        <Dialog.Overlay className="DialogOverlay"/>
                        <Dialog.Content className="DialogContent" class='cardConsulta'>
                            <Appointment/>
                        </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                       
                 </div>
                </div>
                <div className='w-full h-[1px] bg-gray-400 mt-2 '></div>
                <h2 className='self-start text-3xl pt-5 pb-2 pl-5'>Sobre Mim</h2>
                <div className='flex w-full p-5'>
                    <span className={`  md:w-11/12 ${biografia}`} id="biografia">
                        {props.biografia}
                        <a href="#" className={`text-sky-600 ${lerMenos}`} onClick={textTruncate} >
                            ler menos
                        </a>
                    </span>
                    <a href="#" className={`w-auto text-sky-600 ${lerMais}`} onClick={textTruncate} >
                        ler mais
                    </a>
                </div>
            </div >
        );
    }else {

        return (
            <div className='flex flex-col items-center px-44'>
                <img src={props.profilePhoto} className='w-full max-h-[400px] rounded-b-lg ' />
                <div className='flex self-start w-full z-10 mt-[-80px] px-9'>
                    <img src={props.userPhoto} className=" relative border-4 h-48 border-white border-solid rounded-full" />
                    <div className='flex justify-between w-full mt-16'>
                        <div className='flex flex-row items-center gap-1'>
                            <p className=' text-4xl'>{props.name}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-400 mt-2'></div>
                <h2 className='self-start text-3xl pt-5 pb-2'>Sobre Mim</h2>
                <div className='flex w-full'>
                    <span className={`w-11/12 ${biografia}`} id="biografia">
                        {props.biografia}
                        <a href="#" className={`text-sky-600 ${lerMenos}`} onClick={textTruncate} >
                            ler menos
                        </a>
                    </span>
                    <a href="#" className={`w-auto text-sky-600 ${lerMais}`} onClick={textTruncate} >
                        ler mais
                    </a>
                </div>
            </div >
        );

    }

}

