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
  const className = "px-4 py-2 border rounded w-[100%] bg-white";
  return (
    <>
      <section className="w-full pt-[74px]">
        <div className="flex justify-center items-center py-4 bg-[#002049] mx-28 gap-4 border rounded-2xl">
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
          <div className="flex items-center border bg-white rounded px-4 py-2">
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
