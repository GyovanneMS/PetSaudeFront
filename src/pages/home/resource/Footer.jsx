import React from "react";
import linha from "../../../assets/svg/linha.svg"
import logo from "../../../assets/svg/iconDog.svg"


export const Footer = () => {
    return (
        <>
            <div className=" bg-[#9ED1B7]">
                <div>
                    <div>
                        <p className="flex flex-row align-middle "><img className="w-20" src={logo} alt="" /> PetSaude</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="flex justify-center  flex-col">
                    <img src={linha} alt="" className="flex mx-28"/>
                    <p className="flex justify-center">©Copyright 2023 - NovaDev</p>
                </div>
            </div>
        </>
    )
};