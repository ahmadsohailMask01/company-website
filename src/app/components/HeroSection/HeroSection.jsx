"use client";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative text-center text-white p-10 pb-20 mb-25 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="flex-col justify-center items-center gap-2 p-2">
          <h2 className="text-4xl font-bold">CRYPTO CURRENCY</h2>
          <p className="mt-2">Secure and easy transactions for everyone.</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 rounded hover:bg-blue-700">
            Read More
          </button>
        </div>

        {/* Curved Bottom Shape */}
        <div className="invisible md:visible absolute top-60 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="25%" stopColor="#23368c" />
                <stop offset="50%" stopColor="#283289" />
                <stop offset="75%" stopColor="#2d2f87" /> {/* blue-900 */}
                <stop offset="100%" stopColor="#312c85" /> {/* indigo-900 */}
              </linearGradient>
            </defs>
            <path
              d="M0,0V30c50,30,150,70,300,70S550,40,700,30s250,40,500,40V0Z"
              fill="url(#waveGradient)"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
