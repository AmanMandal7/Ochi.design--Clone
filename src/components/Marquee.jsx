import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (
    <div className='w-full rounded-t-2xl bg-[#004D43] text-[#fff] py-[7vw]'>
        <div className='font-["FoundersGrotesk"] flex gap-[5vw] pb-[3vw] items-center whitespace-nowrap border-y-[1px] border-y-[#ffffff53]'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:'15'}} className='uppercase text-[27vw] leading-[16vw] tracking-[-6px]'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:'15'}} className='uppercase text-[27vw] leading-[16vw] tracking-[-6px]'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee