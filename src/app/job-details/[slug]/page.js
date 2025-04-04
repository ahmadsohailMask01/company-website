'use client'
import CareersDetail from '@/app/components/CareersDetail/CareersDetail';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams();
    const slug = params.slug;
  return (
    <><CareersDetail slug={slug}/></>
  )
}

export default page