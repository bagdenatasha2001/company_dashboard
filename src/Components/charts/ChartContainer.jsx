import React from 'react'
import DonutChart from './DonutChart'
import Donut_2 from './Donut_2'
import ChartHeader from './ChartHeader'

export default function ChartContainer() {
  return (
    <>
    <div className='w-full flex h-[550px] justify-around p-3 space-x-5'>
      
      <div className='w-[50%]  justify-center items-center  '>

          <div className='flex items-center'>
           <ChartHeader
           title="Internship Lising Analytics"
           buttonText="More Information"
           onButtonClick={() => console.log("First button clicked!")} />
          </div>

          <div className='w-full items-center bg-[#FBFBFB]' >
          <DonutChart />
           <div className=' flex items-center space-x-3 justify-center mt-2'>

          <div className='w-3 h-3 bg-[#bee3e3] rounded-[3px]'> </div>
           <p style={{color: '#555', fontSize: '14px' }}>2025</p>
          </div>

          </div>

      </div>
         
      

         <div className='w-[50%]  justify-center items-center   '>
            <div>
           <ChartHeader
           title="Internship"
           buttonText="More Information"
            onButtonClick={() => console.log("second button clicked!")} />
          </div>

        <div className='w-full  bg-[#FBFBFB] items-center justify-center'>
         <Donut_2 />

          <div className=' flex items-center space-x-3 justify-center mt-2'>
          <div className='w-3 h-3 bg-[#bee3e3] rounded-[3px]'> </div>
           <p style={{color: '#555', fontSize: '14px' }}>2025</p>
          </div>

        </div>

    
      </div>

    </div>

    </>
  )
}
