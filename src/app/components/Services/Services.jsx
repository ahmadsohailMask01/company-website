"use client";
import React from "react";
import { FaLock, FaShieldAlt, FaHeadset } from "react-icons/fa";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  const heading =
    "Empowering business with innovative, high-performance digital solutions, that drive growth and efficiency";
  return (
    <>
      <section className="flex flex-col justify-center items-center font-poppins mt-[-20] text-center bg-[url(/images/services_bg.jpg)] bg-no-repeat bg-cover bg-center mb-10 text-white ">
        <div className="bg-[#002049]/80 p-8">
          <p className="text-3xl font-extrabold tracking-widest mb-4 ]">
            OUR <font className="text-[#15A5DF]">SERVICES</font>
          </p>
          <p className="text-lg font-medium tracking-wide">
            {heading.toUpperCase()}
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 justify-center  gap-6">
            {[
              {
                icon: FaLock,
                title: "Business Consultancy",
                description:
                  "Business application modernization and consultancy removes organizational barriers to ensure fast, secure, easier to use applications which solve your everyday business problems. Be it ",
                itemNo: "1",
              },
              {
                icon: FaShieldAlt,
                title: "Technology Consultancy",
                description:
                  "We don’t fit technology over the processes. First we understand the processes and the business requirements, then we advise you with the best industry standards using SAP ERP systems. After closely ",
                itemNo: "2",
              },
              {
                icon: FaHeadset,
                title: "ERP Strategy & Implementation",
                description:
                  "For many an Enterprise Resource Planning (ERP) implementation is a technology project, this is where they start going wrong. We have learned with our experience in the industry that ERP",
                itemNo: "3",
              },
            ].map(({ icon: Icon, title, description, itemNo }) => (
              <div
                key={title}
                className={`p-8 rounded-lg shadow-lg ${
                  itemNo === "2" ? "bg-white text-black" : "text-white"
                } `}
              >
                <Icon className="text-blue-500 text-3xl mb-2" />
                <p className="text-lg font-semibold">{title}</p>
                <p className="  mt-4">{description}</p>
              </div>
            ))}
          </div>
          <Button
            label="Learn More"
            className="px-4 py-2 bg-[#255fc1] mt-8 mb-2 w-[200px] rounded-2xl font-poppins font-medium cursor-pointer"
            onClick={() => router.push("/services")}
          />
        </div>
      </section>
    </>
  );
};

export default Services;
