'use client'
import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'

const Industries = () => {
    const [width, setWidth] = useState(null);
    useEffect(()=>{
        setWidth(window.innerWidth);
    }, []);
  return (
    <section className='flex flex-col justify-center items-center bg-[#F2F2F2] w-full font-poppins'>
        <div className=' text-black text-center font-medium tracking-wide text-lg lg:w-[40%]'>
        <p className='leading-6 font-extrabold text-4xl mt-8 mb-4'>WHO WE <span className='text-[#2F7af7]'>HELP</span></p>
            <p className='text-base font-light leading-4 my-4'>Delivering tailored digital solutions to drive innovation & efficiency across diverse industries.</p>
        </div>
        <div className={`grid ${width<=430?'grid-cols-1':'grid-cols-2'} md:grid-cols-5 lg:w-[86%] rounded-2xl mb-8 p-8 bg-white`}>
            <div className='flex flex-col justify-center items-start border-r-gray-300 border-r'>
                <img src='/images/Anime-1.gif' className='w-16 rounded-[50px] mb-4'/>
                <p className='font-bold w-36 text-start text-lg leading-5'
                >Business Consultancy</p>
            </div>
            <div className='flex flex-col  justify-center  items-start border-r-gray-300 pl-8 lg:border-r'>
            <img src='/images/2.png' className=' w-20 rounded-[20px] mb-4'/>
                <p className='font-bold w-36 text-start text-lg leading-5
                '>Technology Consultancy</p>
            </div>
            <div className='flex flex-col  justify-center items-start border-r-gray-300 pl-8 border-r'>
            <img src='/images/Anime-3.gif' className=' w-20 rounded-[14px] mb-4'/>
                <p className='font-bold w-36 text-start text-lg leading-5
                '>ERP Strategy & Implementation</p>
            </div>
            <div className='flex flex-col  justify-center  items-start border-r-gray-300 pl-8 lg:border-r'>
            <img src='/images/4.png' className=' w-20 rounded-[20px] mb-4'/>
                <p className='font-bold w-36 text-start text-lg leading-5
                '>Internet of Things (IOT)</p>
            </div>
            <div className='flex flex-col  justify-center lg:ml-[-10] pl-8 items-start'>
            <img src='/images/Anime-5.gif' className=' w-20 rounded-[20px] mb-4'/>
                <p className='font-bold w-36 text-start text-lg leading-5
                '>Education & Training</p>
            </div>
        </div>
        <div className='bg-[#2f7af7] rounded-[100px] hover:bg-[#255fc1] mb-8 transition-all duration-300'>
            <Button label='Explore more industries' className='cursor-pointer text-white px-4 py-2'/>
        </div>
        </section>
  )
}

export default Industries