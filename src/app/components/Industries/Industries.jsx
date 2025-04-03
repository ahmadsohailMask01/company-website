'use client'
import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'

const Industries = () => {
    const [width, setWidth] = useState(null);
    useEffect(()=>{
        setWidth(window.innerWidth);
    }, []);
  return (
    <section className='flex flex-col justify-center items-center bg-white w-full p-4 py-16 font-poppins space-y-5'>
        <div className=' text-4xl font-extrabold text-black'>
            <p>WHO WE <font className='text-[#2F7af7]'>HELP</font></p>
        </div>
        <div className=' text-black text-center font-medium tracking-wide text-lg lg:w-[40%]'>
            <p className='text-base font-light'>Delivering tailored digital solutions to drive innovation & efficiency across diverse industries.</p>
        </div>
        <div className={`grid ${width<=430?'grid-cols-1':'grid-cols-2'} md:grid-cols-5 lg:w-[93%]`}>
            <div className='flex flex-col px-12   justify-center items-start space-y-4'>
                <img src='/images/Anime-1.gif' className=' w-16'/>
                <p className='font-bold w-36 text-start text-lg'
                >Business Consultancy</p>
            </div>
            <div className='flex flex-col px-12  justify-center  items-start space-y-4'>
            <img src='/images/2.png' className=' w-20'/>
                <p className='font-bold w-36 text-start text-lg
                '>Technology Consultancy</p>
            </div>
            <div className='flex flex-col px-12  justify-center items-start space-y-4'>
            <img src='/images/Anime-3.gif' className=' w-20'/>
                <p className='font-bold w-36 text-start text-lg
                '>ERP Strategy & Implementation</p>
            </div>
            <div className='flex flex-col px-12  justify-center  items-start space-y-4'>
            <img src='/images/4.png' className=' w-20'/>
                <p className='font-bold w-36 text-start text-lg
                '>Internet of Things (IOT)</p>
            </div>
            <div className='flex flex-col px-12  justify-center lg:ml-[-10]  items-start space-y-4'>
            <img src='/images/Anime-5.gif' className=' w-20'/>
                <p className='font-bold w-36 lg:w-50 text-start text-lg
                '>Education & Training</p>
            </div>
        </div>
        <div className='bg-[#2f7af7] px-4 py-2 rounded-[100px] hover:bg-[#255fc1] transition-all duration-300'>
            <Button label='Explore more industries' className='cursor-pointer text-white'/>
        </div>
        </section>
  )
}

export default Industries