import googleLogo from "../../assets/svg/Google.svg";

function handleGoogleButtonClick(e) {
    e.preventDefault()
    console.log('teste')
}

export function AuthHeader(props) {
    return (
        <div className='flex flex-col items-center xl:w-fit h-fit lg:gap-8 sm:gap-4'>
            <span className='flex flex-col justify-center items-center'>
                <h1 className='xl:text-4xl text-2xl font-bold text-center'>{props.title}</h1>
                <h3 className='xl:text-2xl text-base lg:mt-0 mt-[-8px] font-normal text-[#A9A9A9] text-center'>{props.subtitle}</h3>
            </span>
            <button onClick={handleGoogleButtonClick}>
                <img src={googleLogo} alt='Google Button' className='lg:w-16 md:w-14 w-10'/>
            </button>
            <span className='flex justify-center items-center gap-4 lg:text-xl text-base font-normal text-[#A9A9A9] w-full text-center
                    before:w-1/4 before:lg:w-[32%] before:h-0.5 before:block before:bg-gray-300
                    after:w-1/4 after:lg:w-[32%] after:h-0.5 after:block after:bg-gray-300'>
                Ou use o e-mail
            </span>
        </div>
    )
}