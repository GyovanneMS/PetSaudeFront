import googleLogo from '../../assets/svg/Google.svg'
import backgroundImage from '../../assets/login-register-background.png'
// import {type} from "@testing-library/user-event/dist/type";
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { useState } from "react";

function handleGoogleButtonClick(e) {
    e.preventDefault()
    console.log('teste')
}

export function Register() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const submitForm = data => {
        if (validateForm(data))
            localStorage.setItem('__user_register_infos', JSON.stringify(data))
    }

    let [isPasswordVisible, setPasswordVisibility] = useState(false)
    let [isConfirmPasswordVisible, setConfirmPasswordVisibility] = useState(false)

    const togglePasswordVisibility = () => {
        if (isPasswordVisible === false)
            setPasswordVisibility(true)
        else
            setPasswordVisibility(false)
    }

    const toggleConfirmPasswordVisibility = () => {
        if (!isConfirmPasswordVisible)
            setConfirmPasswordVisibility(true)
        else
            setConfirmPasswordVisibility(false)
    }

    const validateForm = (data) => {
        let error = {
            status: false,
            message: '',
        };

        if (data) {
            let {
                password,
                confirmPassword,
            } = data

            if (password !== confirmPassword) error = {status: true, message: 'Password needs to be the same'}

            if (error.status)
                throw new Error(error.message)
            else return true
        }
        return false
    }

    return(
        <section className='flex flex-row w-screen h-screen bg-gradient-to-br from-[#092b5a] to-[#9ed1b7] opacity-90 overflow-x-hidden'>
            <div className='lg:w-1/2 md:w-2/3 w-full min-h-fit h-full bg-white flex flex-col md:justify-center justify-between items-center lg:gap-6 md:gap-4 sm:gap-2 z-10 p-4'>
                <div className='flex flex-col items-center xl:w-fit h-fit lg:gap-8 sm:gap-4'>
                    <span className='flex flex-col justify-center items-center'>
                        <h1 className='xl:text-4xl text-2xl font-bold text-center'>É novo por aqui?</h1>
                        <h3 className='xl:text-2xl text-base lg:mt-0 mt-[-8px] font-normal text-[#A9A9A9] text-center'>Insira suas informações abaixo e cadastre-se!</h3>
                    </span>
                    <button onClick={handleGoogleButtonClick}>
                        <img src={googleLogo} alt='Google Button' className='lg:w-16 md:w-14 w-10' />
                    </button>
                    <span className='flex justify-center items-center gap-4 lg:text-xl text-base font-normal text-[#A9A9A9] w-full text-center
                    before:w-1/4 before:lg:w-[32%] before:h-0.5 before:block before:bg-gray-300
                    after:w-1/4 after:lg:w-[32%] after:h-0.5 after:block after:bg-gray-300'>Ou use o e-mail</span>
                </div>
                <form className='h-fit lg:w-2/3 w-3/4 gap-2 p-0 lg:mt-12 md:mt-6' onSubmit={handleSubmit(submitForm)}>
                    <div className='flex lg:flex-row flex-col justify-between lg:gap-8 gap-2 w-full'>
                        <label className='w-full'>
                            Primeiro nome
                            <input className={errors.firstName ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="firstName" {...register('firstName', {required: true})}/>
                        </label>
                        <label className='w-full'>
                            Sobrenome
                            <input className={errors.lastName ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="lastName" {...register('lastName', {required: true})} />
                        </label>
                    </div>
                    <label className='w-full'>
                        E-mail
                        <input className={errors.email ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="email" name="email" {...register('email', {required: true})} />
                    </label>
                    <label className='w-full'>
                        Senha
                        <div className='relative'>
                            <input className={errors.password ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type={isPasswordVisible ? 'text' : 'password'} name="password" {...register('password', {minLength: 6, required: true})} />
                            {isPasswordVisible
                                ? <IoEye className='w-7 h-7 absolute right-4 top-2.5' onClick={togglePasswordVisibility} />
                                : <IoEyeOff className='w-7 h-7 absolute right-4 top-2.5' onClick={togglePasswordVisibility}/>
                            }
                        </div>
                    </label>
                    <label className='w-full'>
                        Confirme a senha
                        <div className='relative'>
                            <input className={errors.confirmPassword ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type={isConfirmPasswordVisible ? 'text' : 'password'} name="confirmPassword" {...register('confirmPassword', {required: true})} />
                            {isConfirmPasswordVisible
                                ? <IoEye className='w-7 h-7 absolute right-4 top-2.5' onClick={toggleConfirmPasswordVisibility} />
                                : <IoEyeOff className='w-7 h-7 absolute right-4 top-2.5' onClick={toggleConfirmPasswordVisibility}/>
                            }
                        </div>
                    </label>
                    <div className='flex lg:flex-row flex-col justify-between lg:gap-8 gap-2 w-full'>
                        <label className='w-full'>
                            Celular
                            <input className={errors.cellphoneNumber ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="tel" name="cellphoneNumber" {...register('cellphoneNumber', {required: true})} />
                        </label>
                        <label className='w-full'>
                            Telefone
                            <input className='h-12 px-2' type="tel" name="phoneNumber" {...register('phoneNumber')} />
                        </label>
                    </div>
                    <button type="submit" onClick={validateForm} className='w-full h-fit bg-[#09738A] text-center text-white font-bold text-2xl rounded lg:mt-12 mt-6 transition py-3 hover:bg-[#78A890]'>Continuar</button>
                </form>
                <p>Já tem uma conta?<Link to='/pages/login' className='pl-1 font-bold'>Faça login</Link></p>
            </div>
            <div className='absolute w-full h-full overflow-hidden flex items-center justify-end'>
                <img src={backgroundImage} alt="" className='w-2/3 h-fit opacity-50' />
            </div>
        </section>
    )
}
