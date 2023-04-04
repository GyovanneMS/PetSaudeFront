import React, {useState} from 'react';
import lapis from "../../../../assets/svg/pencil.svg"


export const InfosProfile = (props) => {


    const [value, valueState] = useState("disable")
    const [password, passwordState] = useState("disable")

    return (
        <div className='w-full h-full border-2 rounded-lg border-black flex flex-col gap-10 pl-20 py-8'>
            <h2 className='text-6xl font-sans'>Informações do perfil</h2>
            <div className="flex justify-between items-center">
                <div className='flex flex-col text-xl text-[#A9A9A9]'>
                    Nome de usuario
                    <input className={`text-black text-3xl ${value}`}/>
                </div>
                <div className='flex flex-col text-xl text-[#A9A9A9]'>
                    E-mail
                    <input className={`text-black text-3xl ${value}`}/>
                </div>
                <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#ECECEC] rounded-full drop-shadow-lg'>
                    <img src={lapis} alt="" />
                            Editar
                </button>
            </div>
            <div className="flex justify-between">
                <div className='flex flex-col text-xl text-[#A9A9A9]'>
                    Senha
                    <input className={`text-black text-3xl ${}`}/>
                </div>
                <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#F9DEDC] rounded-full drop-shadow-lg font-bold text-[#410E0B]'>
                    Mudar Senha
                </button>
            </div>
        </div>
    );
}

