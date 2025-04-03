import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircularProgress from "../CircularBar";

const StaticDataCard = ({ value, text, title, description}) => {
 

  
  return (
    <>
      <div className="flex justify-between font-poppins font-semibold items-center p-2 w-[50%] md:w-[50%] lg:w-auto rounded bg-transparent text-black">
        <div className="flex justify-center items-center w-30">
          <CircularProgress value={value} text={text}/>
        </div>
        <div className="flex flex-col p-1 w-auto space-y-1 justify-center">
          <p className="font-semibold text-xl text-left text-themebluehero text-nowrap">
            {title}
          </p>
          <p className="font-light  text-lg text-left text-nowrap">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default StaticDataCard;
