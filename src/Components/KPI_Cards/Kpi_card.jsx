import React from 'react'

export default function Kpi_card({ title, value, icon: Icon }) {
  return (
    <>
    <div className="flex justify-between items-center bg-[rgb(251,251,251)] rounded-xl shadow p-3 h-[92px] w-[265px] font-['Inter'] ">
      
      <div>
        <p className="text-[12px] font-medium text-gray-600">{title}</p>
        <h2 className="text-[28px] font-semibold text-[#006666]">{value}</h2>
      </div>

   
      <div className="bg-[#F2F2F2] flex rounded-lg h-[61px] w-[61px] items-center justify-center">
        <Icon size={33} className="text-black font-medium" />
      </div>
    </div>

    
    
    </>
  )
}
