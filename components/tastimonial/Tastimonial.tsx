"use client"

// src/components/TestimonialSlider.tsx

import React, { useState, useRef,useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Image from 'next/image'

// Define a type for the testimonial data
type Testimonial = {
  name: string;
  position: string;
  image: string;
  rating: number;
  text: string;
};

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    name: "Charlotte Gomej",
    position: "Founder & CEO",
    image: "https://via.placeholder.com/100x100.png?text=1",
    rating: 5,
    text: "I'm happy from buy here my new property. I'm glad to hear that you had a positive experience with your real estate purchase. Buying property can be a significant investment.",
  },
  {
    name: "Alex Johnson",
    position: "Real Estate Investor",
    image: "https://via.placeholder.com/100x100.png?text=2",
    rating: 4,
    text: "The property purchase process was smooth and satisfactory. Highly recommended for future buyers.",
  },
  {
    name: "Samuel Doe",
    position: "Homeowner",
    image: "https://via.placeholder.com/100x100.png?text=3",
    rating: 5,
    text: "I found my dream home here. The service was excellent and they provided everything I needed.",
  },
  {
    name: "Emma Stone",
    position: "Real Estate Agent",
    image: "https://via.placeholder.com/100x100.png?text=4",
    rating: 5,
    text: "As an agent, I've worked with this platform multiple times and each experience has been exceptional.",
  },
  {
    name: "John Smith",
    position: "New Homeowner",
    image: "https://via.placeholder.com/100x100.png?text=5",
    rating: 4,
    text: "Buying property through this service was an excellent experience. I highly recommend them!",
  },
  {
    name: "John Smith",
    position: "New Homeowner",
    image: "https://via.placeholder.com/100x100.png?text=5",
    rating: 4,
    text: "Buying property through this service was an excellent experience. I highly recommend them!",
  },
  {
    name: "John Smith",
    position: "New Homeowner",
    image: "https://via.placeholder.com/100x100.png?text=5",
    rating: 4,
    text: "Buying property through this service was an excellent experience. I highly recommend them!",
  },
  {
    name: "John Smith",
    position: "New Homeowner",
    image: "https://via.placeholder.com/100x100.png?text=8",
    rating: 4,
    text: "Buying property through this service was an excellent experience. I highly recommend them!",
  },
];

const TestimonialSlider: React.FC = () => {
    const [how, sethow] = useState<number>(0);
    const testimonialsRef = useRef<HTMLDivElement | null>(null);
    const cardWidth = useRef<HTMLDivElement | null>(null);

   const [totalwith,setTotalWidth] = useState(0)
   const [somwWith,setSomeWidth] = useState(0)
   const [activeIndex,setActiveIndex] = useState(0)

   useEffect(()=>{
    if(typeof window !== "undefined"){

      const width = window.innerWidth;
      if (width < 640) {
        sethow(0.12); // Mobile view
      } else if (width < 1024) {
        sethow(0.2); // Tablet view
      } else {
        sethow(0.25); // Desktop view
      }
    }

   },[])
    
   useEffect(()=>{
     const w = testimonialsRef?.current?.scrollWidth ? testimonialsRef?.current?.scrollWidth : 0
     setTotalWidth(w)
      const s = w*how
     setSomeWidth(s)

   },[how])

  useEffect(()=>{
    testimonialsRef?.current?.scrollTo({
      left: activeIndex,
      behavior: "smooth",
    })

  },[activeIndex])
 

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl mb-10 font-bold dark:text-slate-300 text-gray-800">Our Happy Customer</h2>
        <p className="text-gray-600  dark:text-slate-300 mt-2">
          {"I'm"} glad to hear that you had a positive experience with your real estate purchase. Buying property can be a significant investment and {"it's"} important to do your research and feel confident in your decision.
        </p>
      </div>

      <div className="relative">
        <div
          ref={testimonialsRef}
          className="scrollHidentest flex space-x-4 overflow-x-scroll"
        >
          {testimonials.map((testimonial, index) => (
            <div
            ref={cardWidth}
              key={index}
              className="bg-white dark:bg-gray-950 flex-shrink-0 rounded-lg shadow-lg p-6 w-full md:w-1/3 lg:w-1/4"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4"
                  width={200}
                  height = {200}
                />
                <div>
                  <h3 className="text-lg  dark:text-slate-300 font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-blue-500">{testimonial.position}</p>
                  <div className="flex mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                      <FaRegStar key={i} className="text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600  dark:text-slate-300 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={()=>setActiveIndex(()=>(activeIndex -somwWith+totalwith )%totalwith)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 focus:outline-none"
          
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        <button
          onClick={()=>setActiveIndex(()=>(activeIndex + somwWith )%totalwith)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 focus:outline-none"
          
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
