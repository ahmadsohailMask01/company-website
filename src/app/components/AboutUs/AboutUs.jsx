import React from "react";
import "animate.css";

export default function AboutPage() {
  return (
    <div className="bg-[#f0f6ff] text-gray-800 font-poppins">
      {/* Hero Section */}
      <section className="relative bg-[#002049] text-white pt-48 pb-48 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-medium mb-4  tracking-wide">
            Tech That <span className="text-[#2f7af7]">Transforms</span>.
            Solutions That <span className="text-[#2f7af7]">Scale.</span>
          </h1>
          <p className="text-lg font-light animate__delay-1s">
            Biafotech stands as a beacon of excellence, offering a comprehensive
            suite of services. Our technology-agnostic approach allows us to
            provide cutting-edge solutions tailored to your business needs.
            Whether it's business consultancy, technology consultancy, ERP
            strategy and implementation, or specialized education and training,
            we excel in delivering solutions that drive success.
          </p>
        </div>

        {/* Full-width Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-32"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,133.3C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-[#e6f0ff] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2f7af7] mb-6">
            Our Mission
          </h2>
          <p className="text-lg font-light leading-relaxed text-gray-700 max-w-3xl mx-auto ">
            At Biafotech, we strive to be at the forefront of digital
            transformation by delivering scalable, sustainable, and smart
            solutions tailored to evolving industries. Innovation meets
            execution in every project we take on.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="">
            <h2 className="text-4xl font-bold text-[#2f7af7] mb-4">Our Story</h2>
            <p className="text-base font-light text-justify text-gray-700">
            Biafotech draws inspiration from the majestic Biafo Glacier, a 67 km wonder in Pakistan's Karakoram Mountain range. Much like this glacier, part of the world's longest glacial system, we embody resilience and endurance. Biafotech stands as a beacon of excellence, offering a comprehensive suite of services. Our technology-agnostic approach allows us to provide cutting-edge solutions tailored to your business needs. With a primary focus on SAP, Biafotech is proud to be a Gold Partner of SAP, showcasing our unparalleled expertise in SAP solutions. From business transformation to project implementations, ERP rollouts, upgrades, and support, our dedicated teams ensure that your organization thrives in the ever-evolving technological landscape.
            </p>
          </div>
          <div className="">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Our history" className="rounded-3xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Our journey" className="rounded-3xl shadow-lg w-full object-cover" />
          </div>
          <div className="">
            <h2 className="text-4xl font-bold text-[#2f7af7] mb-6">Our Journey</h2>
            <p className="text-base font-light text-justify leading-relaxed text-gray-700">
            Our journey began out of necessity, recognizing a lack of specific expertise in the country. Fueled by this need, we assembled a dedicated team of consultants and business analysts ready to absorb knowledge. In a remarkable feat, we rescued a project within a record 4 months, birthing Biafotech with a vision to elevate standards and professionalism in our industry. Fueled by the fire of perfection and professionalism, our journey since 2017 has propelled us to become a distinguished consultancy in the market. We take pride in directly serving over 90,000 students through our system and processing over 1,000,000 applicants every six months.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2f7af7] mb-16 ">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-42">
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
                className="flex flex-col bg-[#e3efff] w-100 min-h-[240px] justify-center p-8 rounded-3xl shadow-lg text-center transition-all duration-300 "
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
