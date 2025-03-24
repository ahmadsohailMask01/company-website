"use client";
import React from "react";
import Card from "../Card/Card";
import { useRouter } from "next/navigation";

const GetInTouch = () => {
  const router = useRouter();
  return (
    <>
      <section className="flex flex-col w-full p-10 pt-12 lg:pt-9 justify-center items-center bg-[#F2F2F2] relative">
        <div className="flex w-full m-10 justify-center items-center p-5  rounded-2xl min-h-80 bg-[#002049]">
          <div className="flex flex-col font-poppins justify-center items-center space-y-4 text-white">
            <p className="text-4xl font-medium">
              We'd love to <font className="text-[#255FC1]">hear</font> from
              you!
            </p>
            <p className="text-base font-light text-center">
              Whether you have a question about features, trials, pricing, need
              a demo, or anything else, our team is <br /> ready to answer all
              you questions
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:relative md:top-[-80] items-center justify-center  font-poppins gap-10">
          <Card
            title={"Direct Contact"}
            titleClassName="font-medium text-sm text-[#255FC1]"
            description="Reach out to us directly via email for quick and personalized assistance. We're here to help!"
            descriptionClassName="text-center text-sm"
            buttonLabel={"Contact Us"}
            imageSrc={"/images/email.png"}
            imgClassName="w-10"
            buttonClassName="mt-4 w-36 cursor-pointer text-white py-2 bg-[#2F7AF7] rounded flex gap-2 justify-center items-center font-poppins"
            buttonOnClick={() => router.push("/contact-us")}
          />
          <Card
            title={"Contact Support"}
            description="Need help? Raise a ticket, and our team will get back to you with the right solution!"
            descriptionClassName="text-center text-sm"
            buttonLabel={"Support"}
            imageSrc={"/images/support.png"}
            imgClassName={"w-10"}
            titleClassName="font-medium text-[#255FC1] text-sm"
            buttonClassName="mt-4 text-white cursor-pointer px-6 w-36 py-2 bg-[#2F7AF7] rounded flex gap-2 justify-center items-center font-poppins"
            buttonOnClick={() => router.push("https://support.biafotech.com")}
          />
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
