'use client'
import React, { useRef } from "react";
import Select from "../Select";
import { FiSearch } from "react-icons/fi";
import CareerList from "../CareerList/CareerList";

const Careers = () => {
  const selectOneOptions = ["All Cities", "Lahore", "Karachi"];
  const selectTwoOptions = ["All Provinces", "Punjab", "Sindh"];
  const selectThreeOptions = ["All Countries", "Pakistan", "Saudia"];
  const selectFourOptions = [
    "All Departments",
    "AI & ML",
    "Custom Development",
  ];
  const category = useRef();
  const className = "px-4 py-2 border border-gray-300 rounded w-[100%] bg-white";
  return (
    <>
      <section className="w-full pt-[74px] font-poppins">
        <div className="flex flex-col items-center justify-center text-white mx-28 py-4 lg:min-h-[320px] rounded-2xl bg-[#002049]">
          <span className="font-extrabold text-4xl mb-8">Where <span className="text-[#2f7af7]">Passion</span> Meets Profession!</span>
          <span className="w-[60%] text-center font-light">Do what you love, and make an impact! Join a team of like-minded professionals and take your career to the next level with us.</span>
        </div>
        <div className="flex justify-center items-center py-4 bg-white mx-32 border-gray-300 border gap-4 mt-[-40px] rounded-2xl">
          <div>
            <Select options={selectOneOptions} className={className} name='category' ref={category} />
          </div>
          <div>
            <Select options={selectTwoOptions} className={className} />
          </div>
          <div>
            <Select options={selectThreeOptions} className={className} />
          </div>
          <div>
            <Select options={selectFourOptions} className={className} />
          </div>
          <div className="flex items-center border border-gray-300 bg-white rounded px-4 py-2">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Jobs"
              className=" w-full focus:outline-none"
            />
            <button type="submit" className="cursor-pointer">
              <FiSearch className="text-gray-400" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1.5 mx-28 py-4 px-8">
          <CareerList jobId={'511154'} jobTitle={'SQA Engineer'} jobAddress={'Lahore, Punjab, Pakistan'}/>
          <CareerList jobId={'511194'} jobTitle={'SQL Engineer'} jobAddress={'Karachi, Sindh, Pakistan'}/>
          <CareerList jobId={'511174'} jobTitle={'Sofware Engineer'} jobAddress={'Karachi, Sindh, Pakistan'}/>
          <CareerList jobId={'5111524'} jobTitle={'AI & ML'} jobAddress={'Lahore, Punjab, Pakistan'}/>
          <CareerList jobId={'5111854'} jobTitle={'SQL Lite Engineer'} jobAddress={'Karachi, Sindh, Pakistan'}/>
          <CareerList jobId={'5111744'} jobTitle={'HR'} jobAddress={'Lahore, Punjab, Pakistan'}/>
          <CareerList jobId={'5111724'} jobTitle={'Accountant'} jobAddress={'Lahore, Punjab, Pakistan'}/>
          <CareerList jobId={'5111964'} jobTitle={'Typist'} jobAddress={'Karachi, Sindh, Pakistan'}/>
        </div>
      </section>
    </>
  );
};

export default Careers;
