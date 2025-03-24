"use client";
import React from "react";
import {useRouter} from 'next/navigation'
import Button from "../Button/Button";

const HeroSection = () => {
  const router = useRouter();
  return (
    <>
      <section
        className={`flex text-center font-poppins items-center justify-center text-white p-10 pb-20 pt-0 mb-25  w-full z-0 `}
      >
        <div className=" flex flex-col relative justify-center text-center bg-[url(/images/HeroBackground.svg)] bg-center bg-no-repeat items-center gap-2 p-2 w-full rounded-2xl h-screen">
          <h2 className="text-4xl font-bold text-black">
            Transforming Ideas Into Scalable & <br /> Innovative Digital
            Solutions
          </h2>
          <p className="mt-2 text-black">
          Innovative, high-performance digital solutions that drive success. Bringing ideas to life with expertise and efficiency.<br/> Let’s build the future—faster, smarter, and better!
          </p>
          <Button className="mt-4 px-6 py-2 bg-[#2F7AF7] rounded" onClick={()=>router.push('/get-in-touch')} label={'Get In Touch'}/>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
