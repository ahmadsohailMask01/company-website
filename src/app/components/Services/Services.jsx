"use client";
import React, {useState, useRef} from "react";
import { FaLock, FaShieldAlt, FaHeadset } from "react-icons/fa";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  const [iconColor, setIconColor] = useState(false);
  const icon1 = useRef();
  const icon2 = useRef();
  const icon3 = useRef();
  const heading =
    "Empowering business with innovative, high-performance digital solutions, that drive growth and efficiency";
  return (
    <>
      <section className="flex mt-[-20] text-center bg-[url(/images/services_bg.jpg)] bg-no-repeat bg-cover bg-center text-white ">
        <div className="bg-[#002049]/90 p-8 flex flex-col justify-center items-center font-poppins" >
          <p className="text-4xl font-extrabold  mb-4 ]">
            WHAT WE <font className="text-[#2f7af7]">OFFER</font>
          </p>
          <p className="text-base w-[36%] font-light flex self-center">
            {heading}
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 justify-center lg:ml-40 lg:mr-40 gap-12">
            {[
              {
                icon: FaLock,
                title: "Business Consultancy",
                description:
                  "Business application modernization and consultancy removes organizational barriers to ensure fast",
                itemNo: "1",
                ref: icon1
              },
              {
                icon: FaShieldAlt,
                title: "Technology Consultancy",
                description:
                  "Business application modernization and consultancy removes organizational barriers to ensure fast",
                itemNo: "2",
                ref: icon2
              },
              {
                icon: FaHeadset,
                title: "ERP Implementation",
                description:
                  "Business application modernization and consultancy removes organizational barriers to ensure fast",
                itemNo: "3",
                ref: icon3
              },
              
            ].map(({ icon: Icon, title, description, itemNo, ref }) => (
              <div
                key={title}
                onMouseOver={()=>ref.current.style.color='white'}
                onMouseOut={()=>ref.current.style.color='#15A5DF'}
                className={`flex flex-col p-8 justify-center border-b-8 border-[#2f7af7] items-center rounded-lg shadow-lg bg-white text-black hover:bg-[#2f7af7] hover:text-white transition-all duration-300`}
              >
                <Icon className={` text-[#2f7af7] text-6xl`} ref={ref} />
                <p className="font-semibold my-4">{title}</p>
                <p className="font-light">{description}</p>
              </div>
            ))}
          </div>
          <Button
            label="View More Services"
            className="px-4 py-2 bg-transparent mt-8 mb-2 w-[200px] rounded-[100px] text-white border-2 border-[#2f7af7] font-poppins font-medium cursor-pointer hover:bg-[#255fc1] hover:border-[#255fc1] transition-all duration-300"
            onClick={() => router.push("/services")}
          />
        </div>
      </section>
    </>
  );
};

export default Services;
