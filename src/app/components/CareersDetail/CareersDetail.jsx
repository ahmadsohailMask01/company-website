import React from "react";
import { MdLocationOn } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaClipboardList } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const CareersDetail = ({ slug }) => {
  const allJobs = [
    {
      jobId: "511154",
      jobTitle: "SQA Engineer",
      jobLocation: "Lahore, Punjab, Pakistan",
      workingCriteria: "In Office",
      jobType: "Full Time",
    },
    {
      jobId: "511194",
      jobTitle: "SQL Engineer",
      jobLocation: "Karachi, Sindh, Pakistan",
      workingCriteria: "WFH Flexible",
      jobType: "Full Time",
    },
    {
      jobId: "511174",
      jobTitle: "Sofware Engineer",
      jobLocation: "Karachi, Sindh, Pakistan",
      workingCriteria: "In Office",
      jobType: "Part Time",
    },
    {
      jobId: "5111524",
      jobTitle: "AI & ML",
      jobLocation: "Lahore, Punjab, Pakistan",
      workingCriteria: "WFH Flexible",
      jobType: "Full Time",
    },
    {
      jobId: "5111854",
      jobTitle: "SQL Lite Engineer",
      jobLocation: "Karachi, Sindh, Pakistan",
      workingCriteria: "In Office",
      jobType: "Part Time",
    },
    {
      jobId: "5111744",
      jobTitle: "HR",
      jobLocation: "Lahore, Punjab, Pakistan",
      workingCriteria: "In Office",
      jobType: "Part Time",
    },
    {
      jobId: "5111724",
      jobTitle: "Accountant",
      jobLocation: "Lahore, Punjab, Pakistan",
      workingCriteria: "WFH Flexible",
      jobType: "Full Time",
    },
    {
      jobId: "5111964",
      jobTitle: "Typist",
      jobLocation: "Karachi, Sindh, Pakistan",
      workingCriteria: "In Office",
      jobType: "Full Time",
    },
  ];
  return (
    <section className="w-full pt-[74px] pb-8 bg-[#f2f2f2] font-poppins">
      <div className="flex flex-col items-center justify-center text-white mx-28 py-4 lg:min-h-[320px] rounded-2xl bg-[#002049]">
        <span className="font-medium text-4xl mb-4">
          Explore the <span className="text-[#2f7af7]">Role.</span> Imagine the{" "}
          <span className="text-[#2f7af7]">Impact.</span>
        </span>
        <span className="w-[55%] text-center font-light">
          Step into a role where your work truly matters. Dive into the details
          below to discover how you can contribute, grow, and thrive with us in
          a team that values innovation, collaboration, and excellence.
        </span>
      </div>
      <div className="flex flex-col justify-center items-center py-4 bg-white lg:mx-64 border-gray-300 border gap-4 mt-[-40px] rounded ">
        <span className="font-bold text-4xl">Job Details</span>
        {allJobs.map((job) =>
          job.jobId === slug ? (
            <section className="w-full font-poppins px-4" key={job.jobId}>
              <div className="flex w-full justify-between items-center pb-2 border-b border-b-gray-200">
                <div className="flex flex-col space-y-2">
                  <span className="font-bold text-2xl hover:text-[#2f7af7] tracking-wide transition-all duration-200">
                    {job.jobTitle}
                  </span>
                  <div className="flex gap-2">
                    <p className="flex gap-1 text-sm items-center  font-light">
                      <MdLocationOn className="text-[#2f7af7]" />
                      {job.jobLocation}
                    </p>
                    <p className="flex gap-1 text-sm items-center font-light">
                      <HiBuildingOffice2 className="text-[#2f7af7]" />
                      {job.workingCriteria}
                    </p>
                    <p className="flex gap-1 text-sm items-center font-light">
                      <FaClipboardList className="text-[#2f7af7]" />
                      {job.jobType}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 font-light">
                <p className="text-justify">
                  We are looking for a passionate and skilled Frontend Developer
                  to join our growing tech team. As part of our dynamic
                  environment, you'll be involved in crafting intuitive and
                  responsive user interfaces that power exceptional digital
                  experiences. If you're someone who thrives on clean code and
                  elegant design, we'd love to hear from you!
                </p>
                <span className="inline-block text-lg font-bold my-2">
                  Responsibilities
                </span>
                <p className="leading-8">
                  <GoDotFill className="inline" />
                  Develop and maintain responsive web interfaces using React.js
                  (or relevant tech).
                  <br />
                  <GoDotFill className="inline" />
                  Collaborate with designers and backend developers to bring
                  concepts to life.
                  <br />
                  <GoDotFill className="inline" />
                  Optimize application performance for maximum speed and
                  scalability.
                  <br />
                  <GoDotFill className="inline" />
                  Translate UI/UX wireframes into clean, functional code.
                  <br />
                  <GoDotFill className="inline" />
                  Maintain code quality through version control (e.g., Git) and
                  testing.
                  <br />
                  <GoDotFill className="inline" />
                  Participate in code reviews and continuous improvement
                  initiatives.
                  <br />
                  <GoDotFill className="inline" />
                  Ensure cross-browser compatibility and responsive design
                  principles.
                </p>
                <span className="inline-block text-lg font-bold my-2">
                  Requirements
                </span>
                <p className="leading-8">
                  <GoDotFill className="inline"/>Bachelor's degree in Computer Science, Software Engineering,
                  or equivalent experience.<br/><GoDotFill className="inline"/>Proficiency in HTML, CSS,
                  JavaScript, and modern frontend frameworks (e.g., React, Vue).
                  <br/><GoDotFill className="inline"/>Solid understanding of RESTful APIs and asynchronous
                  JavaScript.<br/><GoDotFill className="inline"/>Familiarity with version control systems like Git.
                  Knowledge of responsive and mobile-first design.<br/><GoDotFill className="inline"/>Strong
                  problem-solving skills and attention to detail.<br/><GoDotFill className="inline"/>Excellent
                  communication and teamwork abilities.
                </p>
              </div>
            </section>
          ) : null
        )}
      </div>
    </section>
  );
};

export default CareersDetail;
