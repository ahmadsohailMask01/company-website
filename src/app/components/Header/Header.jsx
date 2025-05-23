"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      className={`bg-white/100 text-white border-b-1 border-[#F2F2F2] fixed z-1 font-poppins w-full rounded text-center`}
    >
      {/* Desktop Menu */}
      <nav className="invisible flex px-28 lg:px-auto py-4 justify-between gap-2 lg:visible w-full text-black">
        <div className="flex w-40 ">
          <Link href="/">
            <img src="/images/biafo-v1.png" className=" w-20" />
          </Link>
        </div>
        <div className="flex justify-evenly items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.slug}
              className="hover:text-gray-300 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center text-sm items-center gap-3">
          <Button
            onClick={() => router.push("/get-in-touch")}
            label="Get in Touch"
            className="cursor-pointer text-white bg-themebluehero px-4 py-2 text-sm rounded-3xl"
          />
        </div>
      </nav>

      {/* Mobile Menu Button */}

      <div className="visible lg:invisible flex justify-between items-center w-full">
        <Link href="/">
          <img
            src="/images/biafo-v1.png"
            className="absolute top-7 w-15 left-2 z-0"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-black"
        >
          {isOpen ? (
            <X
              size={28}
              className="absolute top-2 right-2 z-4 cursor-pointer text-amber-50"
            />
          ) : (
            <Menu
              size={35}
              className="absolute right-4 cursor-pointer top-7 z-2"
            />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 w-full bg-[#255fc1] rounded-2xl text-white p-5 pt-20 z-3 transition-transform duration-300 ${
            isOpen ? "translate-y-15" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.slug}
                className="hover:text-gray-300 text-lg"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                router.push("/get-in-touch");
                setIsOpen(!open);
              }}
              label="Get in Touch"
              className="cursor-pointer text-white bg-[#2f7af7] px-1 w-50 py-2 text-sm rounded"
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
