import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    text: "Absolutely love the quality and support provided. Highly recommend their services!",
  },
  {
    name: "Michael Johnson",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "A game-changer! The best experience I've had with any service provider in this industry.",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaQuoteLeft className="text-gray-400 text-3xl mx-auto mb-4" />
            <p className="text-gray-700 text-lg italic">"{testimonial.text}"</p>
            <div className="mt-4 flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <p className="text-lg font-semibold mt-2">{testimonial.name}</p>
              <span className="text-gray-500 text-sm">{testimonial.role}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
