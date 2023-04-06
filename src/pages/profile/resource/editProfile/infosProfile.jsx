import React, { useState } from 'react';
import lapis from "../../../../assets/svg/pencil.svg"
import { UserPhoto } from './userPhoto';


export const InfosProfile = (props) => {

    const [userInfosDisable, userInfosDisableState] = useState({
        disable: true, 
        class:'opacity-50 bg-gray-200'
    })

    const [password, passwordState] = useState({
        class: "opacity-50 bg-gray-200",
        disabled: true,
        type: "password",
    })

    const [form, formState] = useState({
        nome: props.nome,
        email: props.email,
    })

    const [senha, setSenha] = useState(props.password)

    const handleNameChange = (event) => {
        console.log(event.target.value);
        formState({nome: event.target.value});
    }
    const handleEmailChange = (event) => {
        console.log(event.target.value);
        formState({email: event.target.value});
    }
    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        setSenha(event.target.value);
    }


    return (
        <div className='w-full h-full border rounded-lg border-black flex flex-col gap-10 p-8'>
            <h2 className='text-5xl font-sans'>Informações do perfil</h2>
            <div className="flex justify-between items-center">
                <div className='flex flex-col text-xl text-[#A9A9A9]'>
                    Nome de usuario
                    <input disabled={userInfosDisable.disable} onChange={handleNameChange} className={`text-black text-3xl p-1 ${userInfosDisable.class}`} value={form.nome} id="userInfo" />
                </div>
                <div className='flex flex-col text-xl text-[#A9A9A9]'>
                    E-mail
                    <input disabled={userInfosDisable.disable} onChange={handleEmailChange} className={`text-black text-3xl p-1 ${userInfosDisable.class}`} value={form.email} />
                </div>
                <button className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#ECECEC] rounded-full drop-shadow-lg' onClick={() => {

                    if (document.getElementById('userInfo').disabled == true ) {
                        userInfosDisableState({
                            disable: false, 
                            class:''
                        })
                    }else{
                        userInfosDisableState({
                            disable:true,  
                            class:'opacity-50 bg-gray-200'
                        })
                    }

                }}>
                    <img src={lapis}/>
                    Editar
                </button>
            </div>
            <div className="flex justify-between">
                <div className='flex flex-col text-xl text-[#A9A9A9]'>
                    Senha
                    <input type={password.type} id='password' onChange={handlePasswordChange} className={`text-black text-3xl p-1 ${password.class}`} value={`${senha}`} />
                </div>
                <button 
                    className='w-52 h-12 flex flex-row justify-center items-center gap-4 bg-[#F9DEDC] rounded-full drop-shadow-lg font-bold text-[#410E0B]'
                    onClick={() => {
                        if (document.getElementById('password').type == 'password' ) {
                            passwordState({
                                type: 'text',
                                disabled: false,
                                class: ''
                            })
                            console.log();
                        }else{
                            passwordState({
                                type:'password',
                                disabled: true,
                                class: 'opacity-50 bg-gray-200'
                            })
                        }
                    }}>
                    Mudar Senha
                </button>
            </div>
            <UserPhoto nome={form.nome} completName={props.completName}/>
        </div>
    );
}

