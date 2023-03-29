import React from 'react';
import icon from "./img/Iconbutton.png"
import img from "./img/Ellipse.png"

export const Card = (props) => {
    return (
        <div className='flex flex-col rounded-lg border-solid border-slate-400 w-80 h-52'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='rounded-lg border-solid border-gray-500 max-h-11'><img src={img} alt="" /></div>
                    <h3>
                        {props.name}
                    </h3>
                </div>
                <img src={icon} alt="" />
            </div>
            <img src={props.img} alt="" className='h-1/2 w-full' />
            <span>
                <p>Avaliação {props.avaliacao}/10</p>
                <p className='text-ellipsis'>{props.description}</p>
            </span>
        </div>
    );
}

