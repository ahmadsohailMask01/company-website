"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button/Button";
import StaticDataCard from "../StaticDataCard/StaticDataCard";

const HeroSection = () => {
  const router = useRouter();
  return (
    <>
      <section
        className={`mb-80 pt-70 space-y-2 md:mb-50 lg:pt-32 flex flex-col text-center font-poppins items-center bg-center justify-center lg:mb-0 bg-no-repeat bg-[url(/images/HeroBackground.svg)] bg-[auto_100%] text-white  w-full z-0 h-screen  md:pt-70 `}
      >
        <div className=" flex flex-col relative justify-center text-center items-center gap-2 w-full rounded-2xl">
          <h2 className="text-4xl font-bold text-black ">
            Transforming <font className="text-[#255FC1]">Ideas</font> Into
            Scalable & <br /> Innovative Digital Solutions
          </h2>
          <p className="mt-2 text-black">
            Innovative, high-performance digital solutions that drive success.
            Bringing ideas to life with expertise and efficiency.
            <br /> Let’s build the future—faster, smarter, and better!
          </p>
          <Button
            className="mt-4 px-6 py-2 mb-20 bg-[#2F7AF7] rounded flex gap-2 justify-center cursor-pointer items-center font-poppins"
            onClick={() => router.push("/get-in-touch")}
            label="Get in Touch"
          />
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
