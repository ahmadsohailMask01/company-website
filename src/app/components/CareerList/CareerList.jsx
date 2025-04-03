'use client'
import React from 'react'
import Button from '../Button/Button'
import { useRouter } from 'next/navigation'

const CareerList = ({jobId, jobTitle, jobAddress}, ref) => {
  const router = useRouter();
  const jobInfo = [
    {title:'SQA Engineer', address:'Lahore, Punjab, Pakistan'}
  ]
  return (
    <>
    <div className='flex px-4 py-2 justify-between items-center w-full border-l border-[#2f7af7] hover:border-l-4 transition-all duration-150 cursor-pointer' key={jobId}>
      <div className='flex flex-col justify-center items-start space-y-2'>
        <span>{jobTitle}</span>
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