import React from "react";
import imageAdress from '../../assets/imageAdress.svg'

export function NewAdress() {

    return (

        <div className='flex flex-direction'>
            <div className='flex flex-direction basis-1/2 bg-gradient-to-r from-[#092B5A] to-[#9ED1B7]'>
                <img src={imageAdress} alt="Login with Google account" />
            </div>
        </div>

    )

}