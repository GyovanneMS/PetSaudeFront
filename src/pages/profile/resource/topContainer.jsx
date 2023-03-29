import React, { useState } from 'react';
import iconVet from './img/iconVet.png'
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

    return (
        <div className=' flex flex-col'>
            <img src={props.profilePhoto} className='w-full max-h-[400px] rounded-b-lg ' />
            <div className='flex self-start w-full z-10 mt-[-80px] px-9'>
                <img src={props.userPhoto} className=" relative border-4 h-48 border-white border-solid rounded-full" />
                <div className='flex justify-between w-full mt-16'>
                    <div className='flex flex-row items-center gap-1'>
                        <p className=' text-4xl'>{props.name}</p>
                        <img src={iconVet} />
                    </div>
                    <button className='bg-lime-500 rounded-md px-3 py-2 text-4xl shadow-lg justify-center self-center'>Agendar uma consulta</button>
                </div>
            </div>
            <div className='w-full h-[1px] bg-gray-400 mt-2'></div>
            <h2 className='text-3xl pt-5 pb-2'>Sobre Mim</h2>
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

