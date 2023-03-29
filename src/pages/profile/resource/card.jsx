import React from 'react';
import icon from "./img/Iconbutton.png"

export const Card = (props) => {
    return (
        <div className='flex flex-col rounded-lg border-solid border-slate-400 w-80 h-52'>
            <div>
                <h3>
                    {props.name}
                </h3>
                <img src={icon} alt=""/>
            </div>
            <img src={props.img} alt="" className='h-1/2 w-1/2' />
            <span>
                <p>Avaliação {props.avaliacao}/10</p>
                <p>{props.description}</p>
            </span>
        </div>
    );
}

