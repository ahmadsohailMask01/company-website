"use client";
import React, { useEffect, useRef, useState } from "react";
import Select from "../Select";
import { FiSearch } from "react-icons/fi";
import CareerList from "../CareerList/CareerList";

const Careers = () => {
  const [citySelection, setCitySelection] = useState("");
  const [provinceSelection, setProvinceSelection] = useState("");
  const [countrySelection, setCountrySelection] = useState("");
  const [departmentSelection, setDepartmentSelection] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const selectOneOptions = ["All Cities", "Lahore", "Karachi"];
  const selectTwoOptions = ["All Provinces", "Punjab", "Sindh"];
  const selectThreeOptions = ["All Countries", "Pakistan", "Saudia"];
  const selectFourOptions = [
    "All Departments",
    "AI & ML",
    "Custom Development",
  ];
  const jobs = [
    {
      jobId: "511154",
      jobTitle: "SQA Engineer",
      jobAddress: "Lahore, Punjab, Pakistan",
    },
    {
      jobId: "511194",
      jobTitle: "SQL Engineer",
      jobAddress: "Karachi, Sindh, Pakistan",
    },
    {
      jobId: "511174",
      jobTitle: "Software Engineer",
      jobAddress: "Karachi, Sindh, Pakistan",
    },
    {
      jobId: "5111524",
      jobTitle: "AI & ML",
      jobAddress: "Lahore, Punjab, Pakistan",
    },
    {
      jobId: "5111854",
      jobTitle: "SQL Lite Engineer",
      jobAddress: "Karachi, Sindh, Pakistan",
    },
    {
      jobId: "5111354",
      jobTitle: "HR",
      jobAddress: "Lahore, Punjab, Pakistan",
    },
    {
      jobId: "5111724",
      jobTitle: "Accountant",
      jobAddress: "Lahore, Punjab, Pakistan",
    },
    {
      jobId: "5111964",
      jobTitle: "Typist",
      jobAddress: "Karachi, Sindh, Pakistan",
    },
  ];
  const city = useRef(null);
  const province = useRef(null);
  const country = useRef(null);
  const department = useRef(null);
  const search = useRef(null);
  const className =
    "w-90 md:w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#2f7af7] focus:outline-none focus:border-blue-500 bg-white text-gray-700";

  useEffect(() => {
    setFilteredJobs(jobs);
  }, []);
  const handleSelectionChange = () => {
    console.log(city.current.value);
    console.log(province.current.value);
    console.log(country.current.value);
    console.log(department.current.value);
    console.log(search.current.value);

    if (
      city.current.value === "All Cities" &&
      country.current.value === "All Countries" &&
      province.current.value === "All Provinces" &&
      department.current.value === "All Deparments"
    ) {
      setFilteredJobs(jobs);
    } else {
      const getFilteredJobs = jobs.filter((job) => {
        return city.current.value === "All Cities"
          ? job.jobAddress
              .toLowerCase()
              .includes('') && province.current.value === 'All Provinces' ? 
              job.jobAddress
              .toLowerCase()
              .includes(''):
              job.jobAddress
              .toLowerCase()
              .includes(province.current.value.toLowerCase())
          : job.jobAddress
              .toLowerCase()
              .includes(city.current.value.toLowerCase());
      });
      console.log(getFilteredJobs);
      setFilteredJobs(getFilteredJobs);
    }
  };
  return (
    <>
      <section className="w-full pt-[74px] pb-8 bg-[#f2f2f2] font-poppins">
        <div className="flex flex-col items-center justify-center text-white mx-28 py-4 lg:min-h-[320px] rounded-2xl bg-[#002049]">
          <span className="font-medium text-4xl mb-4">
            Find your next <span className="text-[#2f7af7]">dream</span> job!{" "}
          </span>
          <span className="w-[55%] text-center font-light">
            Do what you love, and make an impact! Join a team of like-minded
            professionals & take your career to the next level with us.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center py-4 bg-white lg:mx-64 border-gray-300 border gap-4 mt-[-40px] rounded ">
          <span className="font-bold text-4xl my-4">Opportunities</span>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-center items-center md:gap-1">
            <div>
              <Select
                options={selectOneOptions}
                onChange={handleSelectionChange}
                className={className}
                name="city"
                ref={city}
              />
            </div>
            <div>
              <Select
                options={selectTwoOptions}
                onChange={handleSelectionChange}
                className={className}
                name="province"
                ref={province}
              />
            </div>
            <div>
              <Select
                options={selectThreeOptions}
                onChange={handleSelectionChange}
                className={className}
                name="country"
                ref={country}
              />
            </div>
            <div>
              <Select
                options={selectFourOptions}
                onChange={handleSelectionChange}
                className={className}
                name="department"
                ref={department}
              />
            </div>
            <div className="group flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-[#2f7af7] focus-within:border-[#2f7af7]">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Jobs"
                className=" w-full focus:outline-none"
                onChange={handleSelectionChange}
                ref={search}
              />
              <button type="submit" className="cursor-pointer">
                <FiSearch className="text-gray-400" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1.5 w-full mx-28 py-4 px-8">
            {filteredJobs.map((job) => {
              return (
                <CareerList
                  key={job.jobId}
                  jobId={job.jobId}
                  jobTitle={job.jobTitle}
                  jobAddress={job.jobAddress}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
