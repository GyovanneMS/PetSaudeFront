import React, {useState} from 'react';
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
            <label htmlFor='photoUser' onChange={handleFileInputChange} className='h-48 w-8' style={{backgroundImage: `url(${selectedFile})`}}>
                <img src={more} className=" relative border-4  border-white border-solid rounded-full" />
            </label>
            <span>
                <h2>{`@${props.nome}`}</h2>
                <p></p>
            </span>
        </div>
     );
}
 