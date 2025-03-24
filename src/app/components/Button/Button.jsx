import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Button = ({label, type, className='', ...props}, ref) => {
  return (
    <><button type={type} className={`${className}`} {...props}  ref={ref}>{label}</button></>
  )
}

export default React.forwardRef(Button);