import React from 'react';
import { HeaderEditProfile } from './resource/headerEdit';
import { TopContainer } from './resource/editProfile/topContainer';
import { InfosProfile } from './resource/editProfile/infosProfile';
import  profilePhoto from './resource/img/profilePhoto.png'
import  userPhoto from './resource/img/userPhoto.png'






export const EditProfile = () => {
    

    return (
        <>
            <HeaderEditProfile />
            <div className="flex flex-col gap-y-3 items-center justify-center h-full pt-[80px] px-[10%]">
                <TopContainer profilePhoto={profilePhoto}/>
                <InfosProfile nome="hayleyVet" email="hayley@gmail.com" password='12345678' photoUser={userPhoto}/>
            </div>
        </>
    );
}

