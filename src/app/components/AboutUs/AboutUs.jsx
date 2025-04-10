"use client";
import React from "react";
import "animate.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  
  const router = useRouter();
  return (
    <div className="bg-[#f0f6ff] text-gray-800 font-poppins">
      {/* Hero Section */}
      <section className="relative bg-[#002049] text-white py-36 px-6 overflow-hidden">
        <div className="flex flex-col items-center relative max-w-4xl mx-auto text-center">
          <span className="text-4xl inline-block font-medium mb-6  tracking-wide">
            Tech That <span className="text-[#2f7af7]">Transforms</span>.
            Solutions That <span className="text-[#2f7af7]">Scale.</span>
          </span>
          <p className="text-base font-light max-w-4xl text-center  mb-6">
            Biafotech stands as a beacon of excellence, offering a comprehensive
            suite of services. Our technology-agnostic approach allows us to
            provide cutting-edge solutions tailored to your business needs.
          </p>
          <Button
            label="Get in Touch"
            className="bg-[#2f7af7] px-4 py-2 rounded cursor-pointer"
            onClick={() => router.push("/get-in-touch")}
          />
        </div>

        {/* Full-width Wave SVG */}
        <div className="absolute bottom-[-60] left-0 bg-white w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-50"
          >
            <path
  fill="#002049"
  fillOpacity="1"
  d="M0,192L120,165.3C240,139,480,85,720,85.3C960,85,1200,139,1320,165.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
/>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-24 pt-18 px-6 bg-gradient-to-b from-white via-[#e6f0ff] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-4xl inline-block font-bold text-[#2f7af7] mb-8">
            Our Mission
          </span>
          <p className="text-lg font-light leading-relaxed text-gray-700 max-w-3xl mx-auto ">
            At Biafotech, we strive to be at the forefront of digital
            transformation by delivering scalable, sustainable, and smart
            solutions tailored to evolving industries. Innovation meets
            execution in every project we take on.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 pb-16 px-6 bg-[#255fc1]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-4xl inline-block font-bold text-white mb-10">
            Our Core <span className="text-[#002049]">Values</span>
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 lg:gap-y-16">
            {[
              {
                title: "Integrity",
                desc: "We uphold the highest standards of integrity in all our actions.",
              },
              {
                title: "Innovation",
                desc: "We constantly strive for innovation in our processes and products.",
              },
              {
                title: "Customer Centricity",
                desc: "Our clients are at the heart of everything we do.",
              },
              {
                title: "Collaboration",
                desc: "We work together, across boundaries, to meet the needs of our customers.",
              },
              {
                title: "Excellence",
                desc: "We pursue excellence in every project, big or small.",
              },
              {
                title: "Sustainability",
                desc: "We are committed to sustainable practices that benefit our planet and future.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#e3efff] scale-100 lg:scale-110 hover:scale-108 lg:hover:scale-115
               p-8 rounded-3xl shadow-lg transition-all duration-300"
              >
                <span className="text-2xl inline-block font-semibold text-[#2f7af7] mb-3">
                  {value.title}
                </span>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col justify-center">
            <span className="text-4xl inline-block font-bold text-[#2f7af7] mb-8">
              Our Story
            </span>
            <p className="text-base font-light text-justify text-gray-700 leading-7">
              Biafotech draws inspiration from the majestic Biafo Glacier, a 67
              km wonder in Pakistan's Karakoram Mountain range. Much like this
              glacier, part of the world's longest glacial system, we embody
              resilience and endurance. Biafotech stands as a beacon of
              excellence, offering a comprehensive suite of services. Our
              technology-agnostic approach allows us to provide cutting-edge
              solutions tailored to your business needs. With a primary focus on
              SAP, Biafotech is proud to be a Gold Partner of SAP, showcasing
              our unparalleled expertise in SAP solutions. From business
              transformation to project implementations, ERP rollouts, upgrades,
              and support, our dedicated teams ensure that your organization
              thrives in the ever-evolving technological landscape.
            </p>
          </div>
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Our history"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      
      <section className="py-16 text-center bg-[#f2f2f2] text-white">
        <span className="inline-block font-bold text-4xl mb-12 text-[#2f7af7]">Our Journey</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-end space-y-16 justify-center">
        <div className="flex flex-col items-start justify-center text-gray-900 md:w-100 h-[130px] px-4 py-2 rounded border-r-4 bg-white border-r-[#255fc1]">
            <span className="font-medium text-[#2f7af7] text-lg">Establishment</span>
            <span className="text-sm text-gray-500">2017</span>
            <p className="font-light text-base text-start">Incorporation with SECP and opening of offices in Lahore, Pakistan.</p>
          </div>
          <div className="flex flex-col items-start justify-center h-[130px] text-gray-900 md:w-100 px-4 py-2 rounded border-r-4 bg-white border-r-[#255fc1]">
            <span className="font-medium text-[#2f7af7] text-lg">Business across multiple Domains</span>
            <span className="text-sm text-gray-500">2018 - 2020</span>
            <p className="font-light text-base text-start">Worked on many projects across multiple domains including Health & Care, Education etc.</p>
          </div>
          <div className="flex flex-col items-start justify-center text-gray-900 md:w-100 h-[130px] px-4 py-2 rounded border-r-4 bg-white border-r-[#255fc1]">
            <span className="font-medium text-[#2f7af7] text-lg">Providing digital educational solutions</span>
            <span className="text-sm text-gray-500">2022</span>
            <p className="font-light text-start text-base">successfully completed multiple projects with leading educational institutions across Pakistan.</p>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-16 justify-center">
        
          <div className="flex flex-col items-start justify-center text-gray-900 h-[130px] md:w-100 px-4 py-2 rounded border-l-4 bg-white border-l-[#255fc1]">
            <span className="font-medium text-[#2f7af7] text-lg">Expansion of Business in Karachi</span>
            <span className="text-sm text-gray-500">2021</span>
            <p className="font-light text-base text-start">Opened first office in Pakistan's largest city with high potential.</p>
          </div>
          <div className="flex flex-col items-start justify-center text-gray-900 h-[130px] md:w-100 px-4 py-2 rounded border-l-4 bg-white border-l-[#255fc1]">
            <span className="font-medium text-[#2f7af7] text-lg">Taking Leadership across Domains</span>
            <span className="text-sm text-gray-500">2023 & Beyond</span>
            <p className="font-light text-base text-start">Leading digital transformation and ERP solutions.</p>
          </div>
        </div>
      </div>
    </section>

      

      {/* What We Do Section */}
      <section className="bg-white py-14 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-4xl inline-block font-bold text-center text-[#2f7af7] mb-12 ">
            What We Do
          </span>
          <div className="grid px-4 md:p-2 lg:p-0 grid-cols-1 md:grid-cols-3 place-items-center gap-8 lg:gap-42">
            {[
              {
                title: "Web Development",
                desc: "Scalable and secure web solutions crafted with modern frameworks and agile methodologies.",
              },
              {
                title: "ERP Strategy & Implementation",
                desc: "For many an Enterprise Resource Planning (ERP) implementation is a technology project, this is where they start going wrong. We have learned with our experience in the industry that ERP",
              },
              {
                title: "Cloud Solutions",
                desc: "Future-proof infrastructure with powerful cloud services and integrations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col bg-[#e3efff] lg:w-100 min-h-[240px] justify-center p-8 rounded-3xl shadow-lg text-center transition-all duration-300 "
              >
                <h3 className="text-2xl font-semibold mb-3 text-[#2f7af7]">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-6 bg-[#f9fbff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2f7af7] mb-10">
            Meet Our Team
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto mb-12 ">
            Behind every line of code and innovation is a team of dreamers,
            doers, and disruptors. Our culture is built around collaboration,
            creativity, and pushing the limits of what's possible.
          </p>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-4 justify-center lg:gap-84">
            {["Alice", "Brad", "Sophie", "Jamal"].map((name, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 w-64"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#2f7af7] flex items-center justify-center text-white text-xl font-bold">
                  {name.charAt(0)}
                </div>
                <h4 className="text-xl font-semibold mt-4">{name}</h4>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
