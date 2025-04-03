'use client'
import React, {useEffect, useRef} from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const FloatingGetDown = () => {
  const getDownDiv = useRef();

  useEffect(() => {
    const setDisplay = () => {
      if (window.scrollY > 10) {
        getDownDiv.current.style.opacity = "0";
      } else {
        getDownDiv.current.style.opacity = "1";
      }
    };
    window.addEventListener("scroll", setDisplay);
    return () => window.removeEventListener("scroll", setDisplay);
  }, []);
  return (
    <>
      <div
        className="flex justify-between items-center gap-4 fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-6 text-2xl transition-opacity duration-300"
        ref={getDownDiv}
      >
        <BsFillArrowDownSquareFill className="animate-bounce text-[#2f7af7]" />
        <p className="text-[#2f7af7] animate-pulse">Let's get going</p>
      </div>
    </>
  );
};

export default FloatingGetDown;
