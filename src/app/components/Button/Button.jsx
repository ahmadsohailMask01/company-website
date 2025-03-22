import React from 'react'

const Button = ({label, type, className='', ...props}, ref) => {
  return (
    <><button type={type} className={`${className}`} {...props}  ref={ref}>{label}</button></>
  )
}

export default React.forwardRef(Button);