"use client";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="flex text-center items-center justify-center text-white p-10 pb-20 pt-0 mb-25 absolute top-0 w-full z-0 ">
        <div className=" flex flex-col relative justify-center text-center bg-[url(/images/HeroBackground.svg)] bg-center bg-no-repeat items-center gap-2 p-2 w-full rounded-2xl h-screen">
      
          <h2 className="text-4xl font-bold text-black">Transforming Ideas Into Scalable & <br/> Innovative Digital Solutions</h2>
          <p className="mt-2 text-black">Secure and easy transactions for everyone.</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 rounded hover:bg-blue-700">
            Read More
          </button>
        </div>

       
       
      </section>
    </>
  );
};

export default HeroSection;
