import React, { useState } from 'react';
import { HeaderEditProfile } from './resource/headerEdit';
import { TopContainer } from './resource/editProfile/topContainer';
import { InfosProfile } from './resource/editProfile/infosProfile';





export const EditProfile = () => {

    return (
        <>
            <HeaderEditProfile />
            <div className="flex flex-col gap-y-3 items-center justify-center h-full pt-[80px] px-[10%]">
                <TopContainer/>
                <InfosProfile nome="hayleyVet" email="hayley@gmail.com"/>
            </div>
        </>
    );
}

