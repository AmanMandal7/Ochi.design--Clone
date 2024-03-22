import React from 'react'

const About = () => {
  return (
    <div className='w-full font-[NeueMontreal] bg-[#CDEA68] rounded-t-2xl pt-24 pb-8 text-[#212121]'>
        <h1 className='px-14 text-[55px] leading-[55px] mr-[15vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to <a href="#" className='underline decoration-[2px] underline-offset-[10px]'>raise funds</a>, <a href="#" className='underline decoration-[2px] underline-offset-[10px]'>sell products</a>, <a href="#" className='underline decoration-[2px] underline-offset-[10px]'>explain complex ideas</a>, and <a href="#" className='underline decoration-[2px] underline-offset-[10px]'>hire great people</a>.</h1>

        <div className='border-t-[1px] mt-[60px] border-t-[#909090] px-0'></div>

        <div className='px-14 py-[15px] flex'>
            <div className='button w-1/2'>
                <h1 className='text-[3.5vw] leading-[55px]'>Our approach:</h1>
                <button className='uppercase px-[30px] py-[17px] mt-[25px] bg-[#212121] text-[#fff] rounded-full flex items-center'>Read More
                    <div className='w-[8px] h-[8px] bg-[#fff] rounded-full ml-[20px]'></div>
                </button>
            </div>
            <div className='image w-1/2 h-[68vh]'>
                <img src="src/assets/img1.jpg" alt="" className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default About