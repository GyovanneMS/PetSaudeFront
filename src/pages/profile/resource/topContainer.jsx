import React from 'react';


export const TopContainer = (props) => {

    return (
        <div className='flex text-3xl w-full h-full bg-no-repeat justify-center' style={{ backgroundImage: `url(${props.profilePhoto})` }}>
            <div className='flex items-center'>
                <img src={props.userPhoto} alt="" />
                <p>{props.name}</p>
            </div>
        </div>
    );

}

