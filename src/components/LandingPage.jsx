import { motion } from 'framer-motion';
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

const LandingPage = () => {
  return (
    <div className='w-full h-screen border-t-[0.1px]'>

      <div className='text px-14 mt-36'>
          {['We Create', 'Eye-Opening', 'Presentations'].map((item, index)=> {
            return <div key={index}  className='masker font-["FoundersGrotesk"] flex items-center'>
                    {index === 1 && (<motion.div initial={{width: 0}} animate={{width: '130px'}} transition={{ease: [0.64, 0, 0.78, 0], duration: 1.5}} className='mt-[14px] mr-3 overflow-hidden'><img src="src/assets/content-image01.jpg" alt=""/></motion.div>)}
                    <h1 className='uppercase text-[139px] leading-[104px] tracking-[-1px]'>{item}</h1>
                  </div>
          })}
      </div>

      <div className='border-t-[1px] mt-[110px] border-t-[#b2b2b2]'></div>

      <div className='footer px-14 pt-3 flex justify-between items-center font-["NeueMontreal"] text-[17px]'>
        <p className=''>For public and private companies</p>
        <p className='ml-[170px]'>From the first pitch to IPO</p>
        <p className='text-[15px] flex'>
          <a href="#" className='border border-gray-800 px-[13px] py-[4px] rounded-3xl'>START THE PROJECT</a>
          <span className='rotate-[-45deg]'>
            <a href="#" className='text-[20px] border border-gray-800 ml-[5px] flex justify-center items-center p-[5px] rounded-full'><IoMdArrowForward /></a>
          </span>
        </p>
      </div>

    </div>
  )
}

export default LandingPage