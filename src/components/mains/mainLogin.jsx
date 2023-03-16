import Google from '../../assets/Google.svg';
import Login from '../../assets/Login.png';


export function Main() {
    return (
        <div className='flex flex-direction'>
                <div className=" p-20 flex h-screen justify-center flex-col basis-1/2">
                    <h1 className=" font-bold text-4xl">
                        Bem-vindos de volta
                    </h1>
                    <p className="w-30 text-sm 	">
                        Por favor, insira suas informações abaixo
                    </p>
                    <a href="">
                        <img src={Google} alt="Login with Google account" />
                    </a>
                </div>
                <div className='flex flex-direction basis-1/2'>
                    <img src={Login} alt="Login image">
                    </img>
                </div>   
        </div>
        
    );
}