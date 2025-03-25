"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../Button/Button";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleContactFormSubmit = (data) => {
    console.log("Data: ", data);
    postSubmit(data);
    reset({
      name: "",
      email: "",
      password: "",
      message: "",
    });
  };

  const postSubmit = ({name, email, password, message}) => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password,
        'message': message,
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      //setAnything(data)
      }).catch((error)=>console.log(error.message))
  }
  return (
    <>
    <section className="flex p-10 pt-25 justify-center">
      <form
        onSubmit={handleSubmit(handleContactFormSubmit)}
        className="flex flex-col justify-center space-y-4 items-center p-4"
      >
        <Input
          type="text"
          placeholder="Enter your Name"
          className="w-100 border-1 rounded p-2"
          label="Enter your Name:"
          required
          {...register("name", {
            required: true,
          })}
        />
        <Input
          type="email"
          placeholder="Enter your Email"
          className="w-100 border-1 rounded p-2"
          label="Enter your Email:"
          required
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          placeholder="Enter your Password"
          className="w-100 border-1 rounded p-2"
          label="Enter your Password:"
          required
          {...register("password", { required: true })}
        />
        <Input
          type="text"
          placeholder="Enter your Message"
          className="w-100 border-1 rounded p-2"
          label="Enter your Message:"
          required
          {...register("message", { required: true })}
        />
        <Button
          type="Submit"
          label="Submit Request"
          className="px-8 py-2 bg-[#255FC1] text-white rounded cursor-pointer"
        />
      </form>
      </section>
    </>
  );
};

export default ContactUs;
