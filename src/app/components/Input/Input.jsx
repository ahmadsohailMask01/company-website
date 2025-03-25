import React, { useId } from "react";

const Input = ({ label, className = "", type = "", ...props }, ref) => {
  const id = useId();
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} className={className} id={id} ref={ref} {...props} />
    </>
  );
};

export default React.forwardRef(Input);
