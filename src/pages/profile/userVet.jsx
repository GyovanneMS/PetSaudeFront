import React from 'react';
import { HeaderProfile } from "./resource/header.jsx";
import { TopContainer } from './resource/topContainer.jsx';
import profilePhoto from "./resource/img/profilePhoto.png"
import userPhoto from "./resource/img/userPhoto.png";
import profileTestePhoto from "./resource/img/profiletestePhoto.webp"
import profilePhotoTeste from "./resource/img/profilePhotoTeste.avif"

export const UserVet = () => {
    return (
        <div>
            <HeaderProfile />
            <TopContainer name="Hayley Williams" profilePhoto={profilePhoto} userPhoto={userPhoto} />
        </div>
    );
}
