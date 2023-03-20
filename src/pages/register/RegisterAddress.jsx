import {AuthHeader} from "../../components/headers/AuthHeader";
import {useForm} from "react-hook-form";
import {registerUser} from "../../services/integrations/user";
import Endereco from "../../assets/address-image.png"
import { Link } from "react-router-dom";

export function RegisterAddress() {
    const {register, handleSubmit, formState: errors, setValue} = useForm()
    const submitForm = async (data) => {
        const registerType = localStorage.getItem('__register_type')
        let userInfos = JSON.parse(localStorage.getItem('__user_register_infos'))
        let allInfos;
        if (registerType === 'client') {
            allInfos = {
                personName: `${userInfos.firstName} ${userInfos.lastName}`,
                cpf: userInfos.cpf,
                email: userInfos.email,
                password: userInfos.password,
                cellphoneNumber: userInfos.cellphoneNumber,
                phoneNumber: userInfos.phoneNumber,
                address: {
                    ...data
                }
            }
            const response = await registerUser(allInfos)
        }
        else {
            userInfos.address = data
            localStorage.setItem('__user_register_infos', JSON.stringify(userInfos))
            document.location.href = '/register/veterinary'
        }
    }

    const getAddressFromZipCode = async (event) => {
        const zipCode = event.target.value
        fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
            .then(response => response.json())
            .then(data => setFormValues(data))
    }

    const setFormValues = data =>  {
        setValue('street', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
    }

    return (
        <section className='flex flex-row w-screen h-screen bg-gradient-to-br from-[#092b5a] to-[#9ed1b7] opacity-90 overflow-x-hidden'>
            <div className="invisible lg:visible lg:w-1/2 md:w-0 w-1/2 h-screen flex items-center ">
                <img src={Endereco} alt="Imagem decorativa" className="w-full  "/>
            </div>
            <div className='lg:w-1/2 md:w-full w-full min-h-screen h-fit bg-white flex flex-col md:justify-center justify-between items-center lg:gap-6 md:gap-4 sm:gap-2 z-10 p-4'>
                <AuthHeader title='Podemos saber a sua localização?' subtitle='Para a experiência na plataforma, informe-nos a sua localização' />
                <form onSubmit={handleSubmit(submitForm)} className='h-fit lg:w-3/4 w-full gap-2 p-0 lg:mt-12 md:mt-6' >
                    <label className='w-full'>
                        CEP
                        <input onBlurCapture={getAddressFromZipCode} className={errors.zipCode ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="zipCode" {...register('zipCode', {required: true})}/>
                    </label>
                    <div className='flex xl:flex-row flex-col justify-between lg:gap-8 gap-2 w-full'>
                        <label className='w-full'>
                            Cidade
                            <input className={errors.city ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="city" {...register('city', {required: true})} />
                        </label>
                        <label className='w-full'>
                            Estado
                            <input className={errors.state ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="state" {...register('state', {required: true})} />
                        </label>
                    </div>
                    <label className='w-full'>
                        Rua
                        <input className={errors.street ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="street" {...register('street', {required: true})} />
                    </label>
                    <label className='w-full'>
                        Bairro
                        <input className={errors.neighborhood ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="neighborhood" {...register('neighborhood', {required: true})} />
                    </label>
                    <div className='flex xl:flex-row flex-col justify-between lg:gap-8 gap-2 w-full'>
                        <label className='w-full'>
                            Número
                            <input className={errors.number ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="number" {...register('number', {required: true})} />
                        </label>
                        <label className='w-full'>
                            Complemento (Se houver)
                            <input className={errors.complement ? 'h-12 px-2 border-b-2 border-b-red-700 bg-red-200' : 'h-12 px-2'} type="text" name="complement" {...register('complement', {required: false})} />
                        </label>
                    </div>
                    <div className='flex xl:flex-row flex-col justify-between gap-2 w-full lg:mt-12 mt-6'>
                        <button id='client' type="submit" onClick={event => localStorage.setItem('__register_type', event.target.id)} className='w-full h-fit bg-[#09738A] text-center text-white font-bold text-2xl rounded transition drop-shadow-xl py-3 hover:bg-[#78A890]'>Cadastrar cliente</button>
                        <button id='professional' type="submit" onClick={event => localStorage.setItem('__register_type', event.target.id)} className='w-full h-fit bg-[#09738A] text-center text-white font-bold text-2xl rounded transition py-3 drop-shadow-xl hover:bg-[#78A890]'>Cadastrar profissional</button>
                    </div>
                    <div className="w-full h-10 flex flex-row gap-1 justify-center pt-40">
                    Já tem uma conta?
                    <Link to="/">
                        <p className="font-bold">
                            Faça Login
                        </p>
                    </Link>
                </div>
                </form>
            </div>
        </section>
        // <div className='flex flex-row w-screen h-screen'>
        //     <div className='flex justify-center content-center basis-1/2 w-1/2 bg-gradient-to-br from-[#092B5A] to-[#9ED1B7]'>
        //         <img src={imageAdress} alt="Login with Google account" className="h-full w-full"/>
        //     </div>
        //     <div className="flex flex-col justify-center items-center w-1/2 basis-1/2 p-20 bg-[#FFFFFF]" >
        //         <div className="w-full flex flex-col gap-5 px-10 items-center">
        //             <div className=" flex flex-col justify-center items-center w-full">
        //                 <h1 className="text-4xl font-semibold"> Podemos saber sua localização? </h1>
        //                 <p className="text-sm text-gray-400/75"> Para a experiência na plataforma, informe-nos a sua localização </p>
        //             </div>
        //             <div className="flex flex-row w-5/6">
        //                 <form >
        //                     <label className="flex flex-col gap-4 text-xl min-w-full">
        //                         CEP
        //                         <input type="text" className="border-b-2 border-gray-700 min-w-full"/>
        //                     </label>
        //                 </form>
        //             </div>
        //             <div className="flex flex-row gap-9 w-5/6">
        //                 <form className="flex min-w-1/2 gap-4 basis-1/2">
        //                     <label className="flex flex-col basis-1/2 min-w-full text-xl basis-1/2 gap-4">
        //                         Cidade
        //                         <input type="text" className="border-b-2 border-gray-700"/>
        //                     </label>
        //                 </form >
        //                 <form className="flex min-w-1/2 gap-4 basis-1/2">
        //                     <label className="flex flex-col basis-1/2 min-w-full text-xl basis-1/2 gap-4">
        //                         Estado
        //                         <input type="text" className="border-b-2 border-gray-700"/>
        //                     </label>
        //                 </form>
        //             </div>
        //             <div className="flex flex-row w-5/6">
        //                 <form >
        //                     <label className="flex flex-col gap-4 text-xl min-w-full">
        //                         Rua
        //                         <input type="text" className="border-b-2 border-gray-700 min-w-full"/>
        //                     </label>
        //                 </form>
        //             </div>
        //             <div className="flex flex-row w-5/6">
        //                 <form >
        //                     <label className="flex flex-col gap-4 text-xl min-w-full">
        //                         Bairro
        //                         <input type="text" className="border-b-2 border-gray-700 min-w-full"/>
        //                     </label>
        //                 </form>
        //             </div>
        //             <div className="flex flex-row gap-9 w-5/6">
        //                 <form className="flex min-w-1/2 gap-4 basis-1/2 ">
        //                     <label className="flex flex-col basis-1/2 min-w-full text-xl basis-1/2 gap-4">
        //                         Número
        //                         <input type="text" className="border-b-2 border-gray-700"/>
        //                     </label>
        //                 </form >
        //                 <form className="flex min-w-1/2 gap-4 basis-1/2">
        //                     <label className="flex flex-col basis-1/2 min-w-full text-xl basis-1/2 gap-4">
        //                         Complemento (se houver)
        //                         <input type="text" className="border-b-2 border-gray-700"/>
        //                     </label>
        //                 </form>
        //             </div>
        //        </div>
        //        <div className="w-full h-1/4 flex items-center justify-center gap-10 ">
        //             <button className="w-50 h-20 bg-[#78A890] px-10 shadow-xl rounded-lg text-[#FFFFFF] font-bold">
        //                 Cadastrar cliente
        //             </button>
        //             <button className="w-50 h-20 bg-[#09738A] px-10 shadow-xl rounded-lg text-[#FFFFFF] font-bold">
        //                 Cadastrar profissional
        //             </button>
        //         </div>
        //         <div className="w-full h-10 flex flex-row gap-1 justify-center">
        //             <p>
        //                 Já tem uma conta?
        //             </p>
        //             <Link to="/">
        //                 <p className="font-bold">
        //                     Faça Login
        //                 </p>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
    )
}