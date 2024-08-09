import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image'

type agent = {
    picture:StaticImageData | string,
    name:string,
    title:string,
    specialization:string,
    activeListings:number,
    soldProperties:number,
    phone:number | string,
    email:string

}

const AgentCard = ({ agent }:{agent:agent}) => {
  return (
    <div className="bg-white dark:bg-slate-950 shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
      <div className="relative">
        <Image src={agent.picture} alt={agent.name} width={600} height={600} className="w-full h-48 object-cover"/>
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h2 className="text-white dark:text-zinc-200 text-xl font-semibold">{agent.name}</h2>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-gray-800 dark:text-zinc-200 text-lg font-bold">{agent.title}</h3>
        <p className="text-gray-600 dark:text-zinc-200 mt-2">📍 {agent.specialization}</p>
        <div className="flex items-center justify-between mt-4 flex-wrap">
          <div>
            <p className="text-gray-800 dark:text-zinc-200 font-semibold">Listings: <span className="text-blue-500">{agent.activeListings}</span></p>
            <p className="text-gray-800 dark:text-zinc-200 font-semibold">Sold: <span className="text-green-500">{agent.soldProperties}</span></p>
          </div>
          <div className="flex space-x-2">
            <a href={`tel:${agent.phone}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300">Call</a>
            <a href={`mailto:${agent.email}`} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
