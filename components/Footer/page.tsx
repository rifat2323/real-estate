// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="  w-full  h-fit bg-black text-white py-10 relative">
      <div className='absolute pointer-events-none opacity-30 bottom-0 w-20 h-20 bg-gradient-to-r from-blue-950 to-cyan-500 blur-lg  rounded-[50%] z-2'></div>
      <div className='absolute pointer-events-none opacity-30 bottom-0 right-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg  rounded-[50%] z-2'></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* RealHomes7 Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Rifat Homes</h2>
            <p className="text-sm leading-relaxed">
              Real estate refers to land and any buildings or other structures on it, as well as any natural resources such as crops, minerals, or water. People can buy, sell, and rent properties such as homes with?
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-xl">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="text-xl">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Pinterest" className="text-xl">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">Buying Guides</a></li>
              <li><a href="#" className="text-sm">Contact us</a></li>
              <li><a href="#" className="text-sm">PropProperty list</a></li>
              <li><a href="#" className="text-sm">Find an agent</a></li>
              <li><a href="#" className="text-sm">Need a loan</a></li>
              <li><a href="#" className="text-sm">Blog</a></li>
            </ul>
          </div>

          {/* PropProperty Section */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">PropProperty</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">Buy</a></li>
              <li><a href="#" className="text-sm">Sell</a></li>
              <li><a href="#" className="text-sm">Rent</a></li>
              <li><a href="#" className="text-sm">Need A loan</a></li>
              <li><a href="#" className="text-sm">Find a lender</a></li>
            </ul>
          </div>

          {/* Terms of Use Section */}
          <div className="w-full md:w-1/5">
            <h2 className="text-lg font-bold mb-4">Terms of use</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm">{"Companies' Role"}</a></li>
              <li><a href="#" className="text-sm">{"Companies' Brands"}</a></li>
              <li><a href="#" className="text-sm">Home Loans</a></li>
              <li><a href="#" className="text-sm">Registration</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
