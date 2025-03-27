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
    <section className="font-poppins w-full p-8 bg-gray-100">
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-6">WHAT OUR <font className='text-[#2f7af7]'>CLIENTS</font> SAY</h2>
      <div className="relative bg-white shadow-md rounded-lg p-6 text-center">
        <FaQuoteLeft className="text-gray-400 text-3xl mx-auto mb-4" />
        <p className="text-gray-700 text-lg italic">
          "{testimonials[currentIndex].text}"
        </p>
        <div className="mt-4 flex flex-col items-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 rounded-full border-2 border-blue-500"
          />
          <p className="text-lg font-semibold mt-2">
            {testimonials[currentIndex].name}
          </p>
          <span className="text-gray-500 text-sm">
            {testimonials[currentIndex].role}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}
