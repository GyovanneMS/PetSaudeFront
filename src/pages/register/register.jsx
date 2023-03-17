import googleLogo from '../../assets/Google.svg'
import backgroundImage from '../../assets/login-register-background.png'
import {useState} from "react";

function handleGoogleButtonClick(e) {
    e.preventDefault()
    console.log('teste')
}

export function Register() {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')

    const handleFirstNameChange = event => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = event => {
        setLastName(event.target.value)
    }

    return(
        <div className='flex flex-row w-screen h-screen bg-gradient-to-br from-[#092b5a] to-[#9ed1b7] opacity-90'>
            <div className='w-1/2 bg-white flex flex-col justify-center items-center gap-12'>
                <div className='flex flex-col items-center w-fit h-fit gap-8'>
                    <span className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-bold'>É novo por aqui?</h1>
                        <h3 className='text-2xl font-normal text-[#A9A9A9]'>Insira suas informações abaixo e cadastre-se!</h3>
                    </span>
                    <button onClick={handleGoogleButtonClick}>
                        <img src={googleLogo} alt='Google Button' className='w-20' />
                    </button>
                    <span className='flex items-center gap-4 text-xl font-normal text-[#A9A9A9] w-full text-center
                    before:w-1/3 before:h-0.5 before:block before:bg-gray-300
                    after:w-1/3 after:h-0.5 after:block after:bg-gray-300'>Ou use o e-mail</span>
                </div>
                <form className='h-fit w-2/3'>
                    <div className='flex justify-between gap-8 w-full'>
                        <label className='w-full'>
                            Primeiro nome
                            <input type='text' value={firstName} onChange={handleFirstNameChange} className='outline-0' />
                        </label>
                        <label className='w-full'>
                            Sobrenome
                            <input type='text' value={lastName} onChange={handleLastNameChange} className='outline-0' />
                        </label>
                    </div>
                </form>
            </div>
            <div className='w-1/2 h-full flex items-center overflow-hidden'>
                <img src={backgroundImage} alt="" className='w-[150%] h-fit mr-32 opacity-50' />
            </div>
        </div>
    )
}