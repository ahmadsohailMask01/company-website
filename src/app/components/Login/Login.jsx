"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = () => {
  const { register, handleSubmit, reset} = useForm();
  const handleLoginFormSubmit = (data) => {
    postLogin(data);
    reset({
      email:'',
      password:''
    });
  };
  const postLogin = ({email, password}) => {
    fetch('', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        'email':email,
        'password': password
      }),
    }).then((res)=>res.json()).then((data)=>{
      //setAnything(data)
    }).catch((error)=>{console.log(error.message)});
  }
  return (
    <>
    <section className="flex p-10 pt-25 justify-center">
      <form
        onSubmit={handleSubmit(handleLoginFormSubmit)}
        className="flex flex-col justify-center space-y-4 items-center p-4"
      >
        <Input
          type="email"
          placeholder="Enter your Email"
          className="w-100 border-1 rounded p-2"
          label="Enter your Email:"
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          placeholder="Enter your Password"
          className="w-100 border-1 rounded p-2"
          label="Enter your Password:"
          {...register("password", { required: true })}
        />
        <Button
          type="Submit"
          label="Login"
          className="px-8 py-2 bg-[#255FC1] text-white rounded cursor-pointer"
        />
      </form>
      </section>
    </>
  );
};

export default Login;
