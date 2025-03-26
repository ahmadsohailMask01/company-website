"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const handleContactFormSubmit = (data) => {
    console.log("Data: ", data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col w-full py-[76px] px-16  sm:px-10 lg:py-[76px] items-center bg-[#F2F2F2] relative min-h-screen font-poppins">
      <div className="w-full h-80 mx-4  sm:h-64 md:h-72 lg:h-80 bg-[#002049] flex justify-center items-center rounded-xl">
        <div className="flex flex-col font-poppins justify-center items-center space-y-4 text-white">
          <p className="text-4xl font-medium">
            We'd love to <span className="text-[#2F7AF7]">hear</span> from you!
          </p>
          <p className="text-base font-light text-center">
            Whether you have a question about features, trials, pricing, need
            a demo, or anything else, our team is <br /> ready to answer all
            your questions.
          </p>
        </div>
      </div>

      <div className="relative -mt-12 bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-center text-[24px] sm:text-3xl md:text-4xl font-bold text-black py-6">Contact Us</h2>

        <form onSubmit={handleSubmit(handleContactFormSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="relative">
              <input
                type="text"
                {...register("firstName", { required: "First name is required" })}
                className="peer w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-transparent"
                placeholder="First Name"
              />
              <label 
                className="absolute left-3 top-3 text-gray-500 transition-all text-sm bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500"
              >
                First Name
              </label>
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div className="relative">
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                className="peer w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-transparent"
                placeholder="Last Name"
              />
              <label 
                className="absolute left-3 top-3 text-gray-500 transition-all text-sm bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500"
              >
                Last Name
              </label>
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="peer w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-transparent"
              placeholder="Email"
            />
            <label className="absolute left-3 top-3 text-gray-500 transition-all text-sm bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500">
              Email
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              {...register("message", { required: "Message is required" })}
              className="peer w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-transparent h-24"
              placeholder="Message"
            ></textarea>
            <label className="absolute left-3 top-3 text-gray-500 transition-all text-sm bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500">
              Message
            </label>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <div className="flex justify-center">
            <button type="submit" className="w-1/2 bg-[#2F7AF7] text-white p-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
