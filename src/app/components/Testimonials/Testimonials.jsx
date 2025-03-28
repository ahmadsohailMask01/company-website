'use client'
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Company",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This service exceeded my expectations! The team is professional, and the results are outstanding.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Head, Startup",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Absolutely love the quality and support they provided. Highly recommend their services!",
  },
  {
    name: "Michael Johnson",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "A game-changer! The best experience I've had with any service provider in this industry.",
  },
];

export default function Testimonials() {
  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  console.log('Width: ', size);

  return (
    <section className=" flex flex-col items-center justify-center font-poppins w-full p-8 bg-[#002049] text-white">
            <p className="text-4xl font-extrabold">REAL STORIES, <span className="text-[#2f7af7]"> REAL IMPACT</span> </p>
            <p className="font-light text-base">Discover how our customers are achieving remarkable results with the help of our solutions.</p>
        <div className="inline-block justify-center items-center bg-transparent w-[80%] rounded-2xl mt-2 overflow-hidden">
        <ReactPlayer url={'https://www.youtube.com/watch?v=LXb3EKWsInQ'} className
        ='rounded' width={'100%'} height={`${size <= 600 ?'300px':'520px'}`} style={{borderRadius:`20px`}}/>
        </div>
    {/* <div className="flex flex-col mx-auto space-y-4 justify-center items-center">
      <p className="text-4xl font-extrabold text-center text-white">{'Real Stories, '.toUpperCase()} <font className='text-[#2f7af7]'>{'Real Impact'.toUpperCase()}</font></p>
      <p className="text-base font-light text-white">Discover how our customers are achieving remarkable results with the help of our solutions.</p>
      <div className="relative flex justify-center items-center text-9xl font-bold bg-white w-[80%] lg:h-[70vh] shadow-md rounded-lg p-6 text-center">
        {'Video'.toUpperCase()}
      </div>
    </div> */}
    </section>
  );
}
