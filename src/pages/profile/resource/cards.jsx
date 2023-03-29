import React from 'react';
import { Card } from './card';
import profiletestePhoto from '../resource/img/profiletestePhoto.webp'

const jsonTeste = [
    {
        name: "teste",
        img: profiletestePhoto,
        avaliacao: 7.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    },
    {
        name: "teste2",
        img: profiletestePhoto,
        avaliacao: 8.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae purus augue. Ut sit amet erat ornare, condimentum lectus vitae, aliquet lectus. Nulla facilisis auctor ex, id rutrum odio aliquet vel. Curabitur non fringilla metus. Praesent et hendrerit ligula. Nam interdum fringilla nulla, vitae rhoncus nunc gravida nec. Quisque ornare tellus risus, in porttitor felis fringilla non. Duis a pulvinar diam, iaculis condimentum justo. In viverra vitae quam eu mattis. Integer eleifend ligula libero. Aenean egestas nisi vitae volutpat hendrerit. Suspendisse at hendrerit odio, vel pellentesque lectus. Cras posuere euismod diam, vel facilisis lectus volutpat sed. Quisque non vehicula justo."
    }
]

export const Cards = () => {
    return ( 
        <div>
            <h2 className=' text-2xl pt-4'>Avaliações</h2>
            {jsonTeste.map(item =>
                
                <Card img={item.img} name={item.name} description={item.description} avaliacao={item.avaliacao}/>
                
            )}
        </div>
        
     );
}
 
