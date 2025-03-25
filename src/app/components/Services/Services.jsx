'use client'
import React from "react";
import { FaLock, FaShieldAlt, FaHeadset } from "react-icons/fa";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  return (
    <>
      <section className="flex flex-col justify-center items-center font-poppins p-8 mt-[-20] text-center bg-[#002049] mb-10 text-white ">
        <p className="text-3xl font-extrabold tracking-widest mb-4 ]">
          OUR <font className="text-[#ffbc00]">SERVICES</font>
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: FaLock,
              title: "Business Consultancy",
              description:
                "Business application modernization and consultancy removes organizational barriers to ensure fast, secure, easier to use applications which solve your everyday business problems. Be it ",
            },
            {
              icon: FaShieldAlt,
              title: "Technology Consultancy",
              description:
                "We don’t fit technology over the processes. First we understand the processes and the business requirements, then we advise you with the best industry standards using SAP ERP systems. After closely ",
            },
            {
              icon: FaHeadset,
              title: "ERP Strategy & Implementation",
              description:
                "For many an Enterprise Resource Planning (ERP) implementation is a technology project, this is where they start going wrong. We have learned with our experience in the industry that ERP",
            },
            {
              icon: FaHeadset,
              title: "Education & Training",
              description:
                "Biafotech given its history has been always closely aligned with the education sector. Not only some of our early and major customers ",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="border p-8 rounded-lg shadow-lg ">
              <Icon className="text-blue-500 text-3xl mb-2" />
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-gray-600  mt-4">{description}</p>
            </div>
          ))}
        </div>
        <Button
          label="Learn More"
          className="px-4 py-2 bg-[#255fc1] mt-8 mb-2 w-[40%] rounded-2xl font-poppins font-medium cursor-pointer"
          onClick={()=>router.push('/services')}
        />
      </section>
    </>
  );
};

export default Services;
