"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const handleContactFormSubmit = (data) => {
    console.log("Data: ", data);
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col w-full py-[76px] px-16  sm:px-10 lg:py-[76px] items-center bg-[#F2F2F2] relative min-h-screen font-poppins">
      <div className="w-full h-80 mx-4  sm:h-64 md:h-72 lg:h-80 bg-[#002049]/90 flex justify-center items-center rounded-xl">
        <div className="flex flex-col font-poppins justify-center items-center space-y-4 text-white">
          <p className="text-4xl font-medium">
            Hi Admin, please <span className="text-[#2F7AF7]">Login</span> here!
          </p>
        </div>
      </div>

      <div className="relative -mt-12 bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-center text-[24px] sm:text-3xl md:text-4xl font-bold text-black py-6">Login</h2>

        <form onSubmit={handleSubmit(handleContactFormSubmit)} className="space-y-8">
          
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

          {/* Email */}
          <div className="relative">
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="peer w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 placeholder-transparent"
              placeholder="Password"
            />
            <label className="absolute left-3 top-3 text-gray-500 transition-all text-sm bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500">
              Password
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex justify-center">
            <button type="submit" className="w-1/2 bg-[#2F7AF7] text-white p-2 cursor-pointer rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
