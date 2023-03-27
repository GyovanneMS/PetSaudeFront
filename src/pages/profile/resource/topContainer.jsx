import React from 'react';
import iconVet from './img/iconVet.png'


export const TopContainer = (props) => {
    return (
        <div className='flex flex-col items-center px-44'>
            <img src={props.profilePhoto} className='w-full max-h-[400px]' />
            <div className='flex self-start w-full z-10 mt-[-80px] px-9'>
                <img src={props.userPhoto} className=" relative border-4 h-48 border-white border-solid rounded-full" />
                <div className='flex justify-between w-full'>
                    <div className='flex flex-row items-center gap-1'>
                        <p className=' text-4xl'>{props.name}</p>
                        <img src={iconVet} />
                    </div>
                    <button className='bg-lime-500 rounded-md px-3 py-2 text-4xl shadow-lg self-center'>Agendar uma consulta</button>
                </div>
            </div>
            <div className='w-full h-[1px] bg-gray-400 mt-2'></div>
        </div>
    );
}

