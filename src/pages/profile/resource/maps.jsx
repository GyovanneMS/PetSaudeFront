import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


export const Maps = () => {

    const containerStyle = {
        width: '400px',
        height: '300px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCLUoJbgxfN1zJr2LGNo5KRLfZfgMjfbME"
    })

    return isLoaded ? (
        <div className="flex flex-col">
            <h2>Localização</h2>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center} />
            </GoogleMap>
        </div>
    ) : <></>
}

