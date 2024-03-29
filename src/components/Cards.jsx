import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-4 px-14 pt-36'>

        <div className="cardcontainer w-1/2 h-[55vh] overflow-hidden">
            <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center">
                <img className='w-[120px] h-[50px] rounded-none' src="src/assets/logo1.svg" alt="" />
                <button className='absolute left-8 bottom-8 border border-[#CDEA68] text-[#CDEA68] px-[13px] py-[3px] rounded-full'>©2019-2022</button>
            </div>
        </div>

        <div className="cardcontainer w-1/2 h-[55vh] flex gap-4 overflow-hidden">
            <div className="card relative w-1/2 h-full bg-[#1d1d1d] rounded-xl flex justify-center items-center">
                <img className='w-[160px] h-[80px] rounded-none' src="src/assets/logo2.svg" alt="" />
                <button className='absolute left-8 bottom-8 border border-[#f1f1f1] text-[#F1F1F1] px-[13px] py-[3px] rounded-full cursor-pointer'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center">
                <img className='w-32 h-32 rounded-none' src="src/assets/logo3.png" alt="" />
                <button className='absolute left-8 bottom-8 border border-[#f1f1f1] text-[#F1F1F1] px-[13px] py-[3px] rounded-full cursor-pointer'>BUSINESS BOOTCAMP ALUMINI</button>
            </div>
        </div>

    </div>
  )
}

export default Cards