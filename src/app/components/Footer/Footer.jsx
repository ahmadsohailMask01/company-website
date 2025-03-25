"use client";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", slug: "/about-us" },
    { name: "Industries", slug: "/industries" },
    { name: "Services", slug: "/services" },
    { name: "Portfolio", slug: "/portfolio" },
    { name: "Get in Touch", slug: "/get-in-touch" },
  ];
  return (
    <footer className="bg-[#002049] text-white py-10 font-poppins">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
        <div className="flex flex-col space-y-4 items-start lg:ml-4">
          {/* Address */}
          <div className="">
            <h3 className="font-bold text-lg tracking-wider">ADDRESS</h3>
            <p className="font-light mt-2">
              Lahore — 1st floor, C-31/10, commercial zone, main boulevard, Lake
              City Raiwind Road Lahore.
            </p>
            <p className="mt-4 font-light">
              Karachi — Office No. 308, 3rd floor, Business Center, 19/1A Shahra
              e Faisal, Block 6 PECHS Karachi
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-justify flex flex-col space-y-2 lg:ml-16 items-start">
          <h3 className="font-bold text-lg tracking-wider">CONTACT</h3>
          <div className="flex justify-left items-center gap-1 mt-1 font-light">
          <FaPhone className="text-[#15A5DF] text-lg" />
            <p>+92 42 32303230</p>
          </div>
          <div className="flex justify-left items-center gap-1 font-light">
          <MdEmail className="text-[#15A5DF] text-[20px] " />
            <p>info@biafotech.com</p>
            
          </div>

          {/*Follow*/}
          <div className="flex flex-col items-left space-y-2 mt-4">
            <h3 className="text-lg font-bold tracking-wider">FOLLOW US</h3>
            <div className="flex  items-center gap-4">
              <a href="">
                {/* <ImFacebook2 className="font-white cursor-pointer text-[#15A5DF] text-[24px]" /> */}
                <img src="/images/facebook.svg"/>
              </a>
              <a href="">
                {/* <BsLinkedin className="font-white text-[24px] cursor-pointer text-[#15A5DF]" /> */}
                <img src="/images/instagram.svg"/>
              </a>
              <a href="">
                {/* <PiInstagramLogoFill className="font-white text-[30px] cursor-pointer ml-[-4px] text-[#15A5DF]" /> */}
                <img src="/images/linkedin.svg"/>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        
        <div className="flex flex-col items-start lg:ml-12">
          <h3 className="text-lg font-semibold text-white tracking-wider">NAVIGATIONS</h3>
          <ul className="mt-3 space-y-2 ">
            {quickLinks.map((link) => {
              return (
                
                  <li key={link.name}>
                    <a href={link.slug} className="hover:text-blue-400 font-light">
                      {link.name}
                    </a>
                  </li>
                
              );
            })}
          </ul>
        </div>

        {/* Partners */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-white tracking-wider">NEWSLETTER</h3>
          <p className="text-sm mt-3">Stay updated with our latest news</p>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-200 text-gray-800 border border-gray-600 focus:outline-none"
            />
            <button className="mt-2 w-full bg-[#15A5DF] hover:bg-blue-600 text-white font-bold tracking-wider px-3 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 text-center pt-5 text-sm">
        &copy; 2017 - {new Date().getFullYear()} Biafotech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
