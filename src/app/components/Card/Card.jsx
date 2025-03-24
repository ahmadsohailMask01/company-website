import React from 'react'
import Button from '../Button/Button'

const Card = ({imageSrc, title, imgClassName='', className='', description='', buttonOnClick, buttonLabel, buttonClassName='', descriptionClassName='', titleClassName='' , ...props }) => {
  return (
    <>
    <div className={`flex flex-col p-4 rounded bg-white w-80 font-poppins pb-10 justify-center items-center space-y-4 ${className}`} {...props} >
        <img src={imageSrc} className={imgClassName}/>
        <h2 className={titleClassName}>{title}</h2>
        <p className={`font-light text-base ${descriptionClassName}`}>{description}</p>
        <Button label={buttonLabel} onClick={buttonOnClick} className={buttonClassName}/>
    </div>
    </>
  )
}

export default Card