import React from 'react'

const Prefooter = () => {
  return (
    <div className='w-full min-h-screen bg-[#CDEA68]'>
        <div className="headings font-[FoundersGrotesk] pt-[150px] text-[16vw] leading-[11.5vw] flex flex-col justify-center items-center">
            <h1 className=''>READY</h1>
            <h1>TO START</h1>
            <h1>THE PROJECT<span className='font-[NeueMontreal] text-[14vw] font-bold'>?</span></h1>
        </div>
        <div className="buttons py-[50px] flex flex-col justify-center items-center gap-[15px] font-[NeueMontreal]">
            <button className='uppercase px-[23px] py-[14px] bg-[#212121] text-[#fff] rounded-full flex items-center'>START THE PROJECT
                <div className='w-[8px] h-[8px] bg-[#fff] rounded-full ml-[20px]'></div>
            </button>
            <p className=''>OR</p>
            <button className='uppercase px-[23px] py-[14px] border text-[#212121] rounded-full flex items-center'>HELLO@OCHI.DESIGN
                <div className='w-[8px] h-[8px] bg-[#212121] rounded-full ml-[20px]'></div>
            </button>
        </div>
    </div>
  )
}

export default Prefooter