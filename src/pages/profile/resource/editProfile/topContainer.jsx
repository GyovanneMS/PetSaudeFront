import React, {useState} from 'react';
import profilePhoto from "../img/profilePhoto.png";
import more from "../img/more.png"


export const TopContainer = () => {

    
    const [selectedImage, setSelectedImage] = useState();

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    return (
        <div className="w-full">
            <input type="file" name="photo" id="photoProfile" className="hidden" />
            <label htmlFor='photoProfile' style={{ backgroundImage: `url(${profilePhoto})` }}
                className='
                    flex justify-center items-center ease-in duration-300 w-full h-64 bg-center bg-origin-content bg-no-repeat bg-cover cursor-pointer rounded-lg bg-zinc-500 hover:bg-blend-lighten '>
                {selectedImage && (
                    <img
                        src={URL.createObjectURL(selectedImage)}
                    />
                )}
                <img className src={more} />
            </label>

        </div>
    );
}




