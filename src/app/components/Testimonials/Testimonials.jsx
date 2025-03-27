'use client'
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className=" flex flex-col items-center justify-center font-poppins w-full p-8 bg-[#002049] text-white">
            <p className="text-4xl font-extrabold">REAL STORIES, <span className="text-[#2f7af7]"> REAL IMPACT</span> </p>
            <p className="font-light text-base">Discover how our customers are achieving remarkable results with the help of our solutions.</p>
        <div className=" flex justify-center items-center bg-white w-[80%] mt-2 h-[60vh] rounded">
        <p className="text-4xl font-extrabold text-black">VIDEO</p>
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
