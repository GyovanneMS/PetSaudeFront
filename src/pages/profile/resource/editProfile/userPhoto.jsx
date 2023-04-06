import React, { useState } from 'react';
import more from "../img/more.png"

export const UserPhoto = (props) => {

    const [selectedFile, setSelectedFile] = useState(props.photoUser);

    const handleFileInputChange = (event) => {
        console.log(event.target.files[0])
        const file = event.target.files[0]
        setSelectedFile(URL.createObjectURL(file));
    }

    return (
        <div>
            <input type="file" accept="image/*" name="photo" id="photoUser" className="hidden" onChange={handleFileInputChange} />
            <div className="flex items-center gap-x-3">
                <label htmlFor='photoUser' onChange={handleFileInputChange} className='h-36 w-36 bg-no-repeat bg-cover flex cursor-pointer bg-slate-200 justify-center items-center rounded-full' style={{ backgroundImage: `url(${selectedFile})` }}>
                    <img src={more} className="" />
                </label>
                <span>
                    <h2 className='text-5xl font-sans'>{`@${props.nome}`}</h2>
                    <p className='text-2xl font-sans opacity-50'>{props.completName}</p>
                </span>
            </div>
        </div>
    );
}
