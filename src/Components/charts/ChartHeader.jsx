import React from 'react'

export default function ChartHeader({ title, buttonText,onButtonClick}) {
  return (
    <>
    <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow w-full mb-5">
     
      <h2 className="text-lg font-semibold text-black">
        {title}
      </h2>

      
      <button
        onClick={onButtonClick}
        className="bg-[#006666] text-white px-4 py-2 rounded-md hover:bg-[#004d4d] transition">
        {buttonText}
       
      </button>
    </div>

      
    </>
  )
}
