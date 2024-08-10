import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
const Position = () => {
  const [position, setPosition] = useState<[number,number]>([51.505, -0.09]); 
  useEffect(() => {
    const fetchCoordinates = async (city:string) => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`,{cache:"no-store"});
        const data = await response.json();

        if (data.length > 0) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        } else {
          console.error('No data found for this city.');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates('London'); // Replace with the city name from your database
  }, []);

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default Position;
