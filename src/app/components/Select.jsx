import React, { useId } from "react";

const Select = ({ name, options = [], className = "", ...props }, ref) => {
  const id = useId();
  return (
    <>
      <select name={name} id={id} className={`${className} cursor-pointer`} {...props} ref={ref}>
        {options?.map((option) => (
          <option key={option} value={option} className="">{option}</option>
        ))}
      </select>
    </>
  );
};

export default React.forwardRef(Select);
