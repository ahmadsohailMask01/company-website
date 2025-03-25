import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StaticDataCard = ({ value, text, title, description }) => {
  return (
    <>
      <div className="flex justify-between  font-poppins font-semibold items-center gap-3 p-2 w-auto rounded bg-transparent text-black">
        <div className="w-20">
          <CircularProgressbar
            value={value}
            text={text}
            styles={buildStyles({
              textColor: "#255fc1",
              pathColor: "#255fc1",
              textSize: "24px",
            })}
          />
        </div>
        <div className="flex flex-col p-1 w-auto space-y-1 justify-center">
          <p className="font-semibold text-xl text-left text-[#255fc1] text-nowrap">
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
