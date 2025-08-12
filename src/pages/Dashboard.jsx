import React from 'react'
import Header from '../Components/Header/header'
import Sideheader from '../Components/sideheade/Sideheader'
import Kpi_Container from '../Components/KPI_Cards/Kpi_Container'
import ChartContainer from '../Components/charts/ChartContainer'


export default function Dashboard() {
  return (
    <>
    <div className="flex w-full h-[100vh] font-['Inter']">


        <div className="bg-[#D1DDDD] w-[20%] h-[1428px] p-3">
            <Sideheader/>

        </div>

        <div className='w-[80%] py-2 '>
         <Header/>
        
        <div className='border-b border-gray-300 mt-3'></div>
        <Kpi_Container/>
       <ChartContainer/>
       
      

        </div>


    </div>

      
    </>
  )
}
