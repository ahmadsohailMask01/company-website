"use client";
import React, { useState, useRef } from "react";
import { Link, Menu, X } from "lucide-react";
import Button from "../Button/Button";
//import "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`bg-white/40 text-white w-full rounded flex fixed justify-evenly text-center items-center z-1`}>
      

      {/* Desktop Menu */}
      <nav className=" flex px-28 py-4 justify-between md:visible w-full text-black">

        <div className="flex w-40  "><img src="/images/biafo-v1.png" className=" w-30"/></div>
        <div className="flex justify-evenly items-center gap-10">{["About Us", "Industries", "Services", "Portfolio", "Insights", "Career"].map(
          (item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              className="hover:text-gray-300 transition duration-300"
            >
              {item}
            </a>
          )
        )}</div>
        <div className="flex justify-center items-center gap-3">
        <Button onClick={()=>window.open('/')} label='Login' className='cursor-pointer text-black'/>
          <Button onClick={()=>window.open('/')} label='Get in Touch' className='cursor-pointer text-white bg-[#15A5DF] px-4 py-2 rounded-3xl'/>
        
        </div>
      {/* <div className="text-2xl font-bold text-[#15A5DF]">Finexo</div>
        {["Home", "About", "Services", "Why Us", "Team", "Login"].map(
          (item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              className="hover:text-gray-300 transition duration-300"
            >
              {item}
            </a>
          )
        )} */}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <Menu size={28} className="absolute right-2 top-5 z-100" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-blue-900 text-white p-5 z-90 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-100"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          {["Home", "About", "Services", "Why Us", "Team", "Login"].map(
            (item) => (
              <a
                key={item}
                href={"#" + item.toLowerCase()}
                className="hover:text-gray-300 text-lg"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
