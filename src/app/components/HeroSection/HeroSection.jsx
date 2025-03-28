"use client";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button/Button";
import StaticDataCard from "../StaticDataCard/StaticDataCard";

const HeroSection = () => {

  const router = useRouter();
  return (
    <>
      <section
        className={`h-[270vh] md:h-[230vh] flex flex-col space-y-8  text-center font-poppins items-center bg-[url(/images/HeroBackground.svg)]  bg-center justify-center  bg-no-repeat  text-white  w-full lg:h-[710px] `}
      >
        <div className=" flex flex-col relative justify-center lg:mt-32 text-center items-center gap-2 w-full rounded-2xl">
          <h2 className="text-4xl font-bold text-black ">
            Transforming <font className="text-themebluehero">Ideas</font> into
            Scalable & <br /> Innovative Digital Solutions
          </h2>
          <p className="mt-2 text-black w-[90%] lg:w-[45%]">
            Innovative, high-performance digital solutions that drive success.
            Bringing ideas to life with expertise and efficiency.
            Let’s build the future—faster, smarter, and better!
          </p>
          <div className="flex flex-col space-y-2 gap-4 mt-4 mb-16 items-center justify-center md:flex-row md:justify-center md:items-center">
          <Button
            className="px-6 py-2 border-2 border-themebluehero bg-themebluehero rounded-[100px] flex gap-2 justify-center cursor-pointer items-center font-poppins font-medium md:mt-2"
            onClick={() => router.push("/get-in-touch")}
            label="Let's Connect"
          />
          <Button
            className=" px-6 py-2 border-2 transition-all duration-300 border-themebluehero text-[#2f7af7] hover:text-white rounded-[100px] flex gap-2 justify-center cursor-pointer items-center font-poppins font-medium  hover:bg-[#255fc1] hover:border-[#255fc1]"
            onClick={() => router.push("/about-us")}
            label="Why Biafotech"
          />
          </div>
        </div>
        <div className="flex flex-col space-y-1 justify-center lg:w-full lg:flex-row lg:gap-20">
          <StaticDataCard
            text={"95%"}
            value={93}
            title={"Engagement"}
            description={"Active Participation"}
          />
          <StaticDataCard
            text={"93%"}
            value={91}
            title={"Performance"}
            description={"Productivity Score"}
          />
          <StaticDataCard
            text={"97%"}
            value={95}
            title={"Satisfaction"}
            description={"Client Feedback"}
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;