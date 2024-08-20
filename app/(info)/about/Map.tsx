"use client"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';


import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { useEffect, useState } from 'react';



const Map = ({point}:{point:[number,number]}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures that the code only runs on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return "loading..."; // or a loading spinner
  }
    
  return (
    <MapContainer center={point} zoom={13} scrollWheelZoom={true} style={{ width:"100%", height:"100%"}}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={point} riseOnHover >
      <Popup>
       our Offices
      </Popup>
    </Marker>
  </MapContainer>
  
  )
}

export default Map