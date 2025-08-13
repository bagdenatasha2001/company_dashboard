import React from 'react'
import logo2 from '../../assets/Images/side_hearde_logo.png'
import { RxDashboard } from "react-icons/rx";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import logout from '../../assets/Images/logout.png'

export default function Sideheader() {
  return (
    <div>
      <div className='p-2 font-inter'>

        
        <div className='flex items-center mb-[20px] h-[60px] w-[90%] p-1'>
          <img src={logo2} alt="logo" className='w-[50px]' />
          <span className='font-bold text-2xl text-[#006666] font-inter'>Go Grads</span>
        </div>

       
        <div className='space-y-5'>

         
          <div className='flex items-center py-[12px] px-[16px] space-x-4 h-[48px] hover:bg-[#006666] group'>
            <RxDashboard size={22} className="text-gray-800 font-bold group-hover:text-white" />
            <span className='font-inter font-medium text-base text-gray-600 group-hover:text-white'>Dashboard</span>
          </div>

        
          <div className='flex items-center py-[12px] px-[16px] space-x-4 h-[48px] hover:bg-[#006666] group'>
            <LuGraduationCap size={24} className="text-gray-800 font-bold scale-x-[-1] group-hover:text-white" />
            <span className='font-inter font-medium text-base  text-gray-600 group-hover:text-white'>Internship</span>
          </div>

          
          <div className='flex items-center py-[12px] px-[16px] space-x-4 h-[48px] hover:bg-[#006666] group'>
            <HiOutlineUserGroup size={24} className="text-gray-800 font-bold group-hover:text-white" />
            <span className='font-inter font-medium text-base  text-gray-600 group-hover:text-white'>Applicants</span>
          </div>

        </div>

        <div className='flex items-center w-[192px] h-[48px] justify-center mt-[544px] border-2 border-[#006666] rounded-[8px]'>
          <button className='flex items-center space-x-1  '>
          <img src={logout} alt="arrow" className='w-[20px] ' />
          <span className='font-bold text- lg   font-inter'>Logout</span>
      
         </button>

        </div>

      </div>
    </div>
  )
}
