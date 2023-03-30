import React, { useState, useRef } from 'react';
import { Card } from './card';
import profiletestePhoto from '../img/profilePhotoTeste.avif'
import arrow from '../img/arrow.png';


const jsonTeste = [
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "feliz",
        img: profiletestePhoto,
        avaliacao: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        photoUser: profiletestePhoto,
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },

]

export const Cards = () => {

    const carrossel = useRef(null)

    const handleLeftClick = (e) => {
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const handleRightClick = (e) => {
        carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }
    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl pt-4 pb-3 px-44'>Avaliações</h2>
            <div className='flex items-center gap-2 px-32'>
                <img src={arrow} onClick={handleLeftClick} className='border cursor-pointer py-3 px-4 rounded-full' />
                <div className='flex overflow-x-hidden gap-x-2 scroll-smooth items-center' ref={carrossel}>
                    {jsonTeste.map(item =>
                        <Card img={item.img} name={item.name} description={item.description} avaliacao={item.avaliacao} />
                    )}
                </div>
                <img src={arrow} onClick={handleRightClick} className='border rotate-180 cursor-pointer py-3 px-4 rounded-full' />
            </div>
        </div>
    );
}

