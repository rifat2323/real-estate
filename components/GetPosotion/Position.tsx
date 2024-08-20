"use client"

import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
const Position = ({city}:{city:string}) => {
  const [position, setPosition] = useState<[number,number] | null>(null); 
   const [load,setLoad] = useState(false)
   console.log(position)
   useEffect(()=>{
    setLoad(true)
   },[])
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`,{cache:"no-store"});
        const data = await response.json();

        if (data.length > 0) {
          console.log(data[0])
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        } else {
          console.error('No data found for this city.');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates(); // Replace with the city name from your database
  }, [city]);
  

  return (
    <>
    {
      position ?(
        <MapContainer  center={position} zoom={13} scrollWheelZoom={false}  style={{ width:"100%", height:"100%"}}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} riseOnHover >
        <Popup>
        House
        </Popup>
      </Marker>
    </MapContainer>

      ):(
        <div>loading map...</div>
      )
    }
 
    </>
   

  );
};

export default Position;
