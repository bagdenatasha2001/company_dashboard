import React from 'react'
import Intership from './Intership.jsx'
import RecentApplicants from './RecentApplicants.jsx'


export default function IntershipTableContainer() {
  return (
    <>
    <div className=' w-full  flex gap-5'>
      <div className='w-[50%] '>
    <Intership/>
    </div>

    <div className='w-[50%]  '>
    <RecentApplicants/>
    </div>
    
    

    </div>
      
    </>
  )
}
