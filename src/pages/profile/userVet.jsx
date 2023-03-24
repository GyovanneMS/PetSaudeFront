import React from 'react';
import { HeaderProfile } from "./resource/header.jsx";
import { TopContainer } from './resource/topContainer.jsx';
import profilePhoto from "../../assets/profilePhoto.png"
import userPhoto from "../../assets/userPhoto.png"

export const UserVet = () => {
    return (
        <div className='w-screen'>
            <HeaderProfile/>
            <TopContainer name="Hayley Williams" profilePhoto={profilePhoto} userPhoto={userPhoto}/>
        </div>
    );
}
 