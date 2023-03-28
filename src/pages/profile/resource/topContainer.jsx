import React from 'react';
import iconVet from './img/iconVet.png'
import TextTruncate from 'react-text-truncate';



export const TopContainer = (props) => {
    return (
        <div className='flex flex-col items-center px-44'>
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
            <span onClick={
                (event) => {
                const teste = event.target.innerText
                console.log(teste.slice(80));
                 
            }
            }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus erat, ultrices at risus euismod, gravida faucibus enim. Curabitur tincidunt ipsum eu pellentesque tempor. Ut molestie in ante non fringilla. Sed at tempor sapien. In feugiat tristique leo ac hendrerit. Integer a mollis leo, nec scelerisque lorem. Etiam pharetra sit amet neque porta sodales.
                Ut malesuada tincidunt ornare. In et malesuada mauris. Nunc commodo volutpat ipsum, non pharetra lorem dictum quis. Fusce ac volutpat sapien. Ut et nulla et enim tristique pharetra a a lorem. Etiam maximus, lectus mollis condimentum dignissim, velit tortor ultricies quam, vel sollicitudin metus orci a risus. Curabitur bibendum quam in massa pharetra fermentum. Phasellus suscipit viverra dui. Praesent non est eget velit rutrum lobortis a et arcu.
            </span>
            {/* <TextTruncate
                onClick={(event) => {console.log(event.target.text)}}
                line={2}
                element="p"
                truncateText="…"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus erat, ultrices at risus euismod, gravida faucibus enim. Curabitur tincidunt ipsum eu pellentesque tempor. Ut molestie in ante non fringilla. Sed at tempor sapien. In feugiat tristique leo ac hendrerit. Integer a mollis leo, nec scelerisque lorem. Etiam pharetra sit amet neque porta sodales.
                Ut malesuada tincidunt ornare. In et malesuada mauris. Nunc commodo volutpat ipsum, non pharetra lorem dictum quis. Fusce ac volutpat sapien. Ut et nulla et enim tristique pharetra a a lorem. Etiam maximus, lectus mollis condimentum dignissim, velit tortor ultricies quam, vel sollicitudin metus orci a risus. Curabitur bibendum quam in massa pharetra fermentum. Phasellus suscipit viverra dui. Praesent non est eget velit rutrum lobortis a et arcu."
                textTruncateChild={<a href="#">ler mais</a>}
            /> */}

        </div>
    );
}

