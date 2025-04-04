'use client'
import React, { useRef } from 'react'
import Button from '../Button/Button'
import { useRouter } from 'next/navigation'

const CareerList = ({jobId, jobTitle, jobAddress}, ref) => {
  const router = useRouter();
  const jobInfo = [
    {title:'SQA Engineer', address:'Lahore, Punjab, Pakistan'}
  ]
  const titleRef = useRef();
  return (
    <>
    <div className='flex pl-4 py-2 justify-between items-center w-[96.5%] border-l border-[#2f7af7] hover:border-l-4 transition-all duration-150 cursor-pointer' key={jobId} onMouseOver={()=>titleRef.current.style.color = '#2f7af7'} onMouseOut={()=>titleRef.current.style.color = 'black'}>
      <div className='flex flex-col justify-center items-start space-y-2'>
        <span className='font-bold' ref={titleRef}>{jobTitle}</span>
        <span>{jobAddress}</span>
      </div>
      <div>
        <Button label='Details'className='border border-[#2f7af7] text-[#2f7af7] hover:bg-[#2f7af7] hover:text-white px-4 py-2 transition-all duration-300 rounded cursor-pointer' onClick={()=>router.push(`/job-details/${jobId}`)}/>
      </div>
    </div>
    </>
  )
}

export default React.forwardRef(CareerList)