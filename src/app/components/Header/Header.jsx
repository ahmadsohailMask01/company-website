"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 flex justify-between items-center z-0">
      <h1 className="text-2xl font-bold">Finexo</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 z-100">
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
        )}
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
