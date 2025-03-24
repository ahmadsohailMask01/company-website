"use client";
import React, { useState } from "react";
import { Link, Menu, X } from "lucide-react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "About Us", slug: "/about-us" },
    { name: "Industries", slug: "/industries" },
    { name: "Services", slug: "/services" },
    { name: "Portfolio", slug: "/portfolio" },
    { name: "Insights", slug: "/insights" },
    { name: "Career", slug: "/career" },
  ];

  return (
    <header
      className={` bg-white/40 text-white font-poppins w-full rounded fixed text-center items-center z-1`}
    >
      {/* Desktop Menu */}
      <nav className="invisible flex px-28 py-4 justify-between gap-2 lg:visible w-full text-black">
        <div className="flex w-40  ">
          <a href="/">
            <img src="/images/biafo-v1.png" className=" w-20" />
          </a>
        </div>
        <div className="flex justify-evenly items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.slug}
              className="hover:text-gray-300 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button
            onClick={() => window.open("/")}
            label="Login"
            className="cursor-pointer text-black"
          />
          <Button
            onClick={() => router.push('/get-in-touch')}
            label="Get in Touch"
            className="cursor-pointer text-white bg-[#15A5DF] px-4 py-2 text-sm rounded-3xl"
          />
        </div>
      </nav>

      {/* Mobile Menu Button */}

      <div className="visible lg:invisible flex justify-between items-center w-full">
        <a href="/">
        <img
          src="/images/biafo-v1.png"
          className="absolute top-5 w-15 left-2 z-0"
        />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-black"
        >
          {isOpen ? (
            <X size={28} className="absolute top-2 right-2 z-4 cursor-pointer text-amber-50" />
          ) : (
            <Menu size={35} className="absolute right-4 cursor-pointer top-8 z-2" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 w-full bg-blue-900/50 rounded-2xl text-white p-5 pt-10 z-3 transition-transform duration-300 ${
            isOpen ? "translate-y-15" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.slug}
                className="hover:text-gray-300 text-lg"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
