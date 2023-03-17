import backgroundImage from '../../assets/login-register-background.png'

export function Register() {
    return(
        <div className='flex flex-row w-screen h-screen bg-gradient-to-br from-[#092b5a] to-[#9ed1b7] opacity-90'>
            <div className='w-1/2 bg-white flex flex-col justify-evenly items-center'>
                <div className='flex flex-col'>

                </div>
                <form>

                </form>
            </div>
            <div className='w-1/2 h-full flex items-center overflow-hidden'>
                <img src={backgroundImage} alt="" className='w-[150%] h-fit mr-32 opacity-50' />
            </div>
        </div>
    )
}