"use client";
import React, { useEffect, useRef } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import 'animate.css'

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
      <div className="flex flex-col justify-center items-center absolute bottom-8 transition-opacity duration-300" ref={getDownDiv}>
        <p className="text-black">Scroll down</p>
        <RiArrowDownSFill className="text-black animate__animated animate__infinite animate__bounce animate__slow" />
      </div>
    </>
  );
};

export default FloatingGetDown;
