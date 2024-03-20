import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen border-t-[0.1px]'>

      <div className='text px-14 mt-36'>
          {['We Create', 'Eye-Opening', 'Presentations'].map((item, index)=> {
            return <div key={index}  className='masker font-["FoundersGrotesk"]'>
                    <h1 className='uppercase text-[139px] leading-[104px] tracking-[-2px'>{item}</h1>
                  </div>
          })}
      </div>

      <div className='border-t-[1px] mt-[110px] border-t-color'></div>

      <div className='footer px-14 pt-3 flex justify-between items-center font-["NeueMontreal"] text-[17px]'>
        <p className=''>For public and private companies</p>
        <p className='ml-[170px]'>From the first pitch to IPO</p>
        <p className='text-[15px]'>
          <a href="#" className='border px-[13px] py-[6px]  rounded-3xl'>START THE PROJECT</a>
          <a href="#" className='ml-1 my-12 border px-[9px] py-[2px] rounded-full text-[22px]'>↗</a>
        </p>
      </div>

    </div>
  )
}

export default LandingPage