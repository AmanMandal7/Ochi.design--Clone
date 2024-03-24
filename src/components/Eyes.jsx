import React from 'react'

const Eyes = () => {
  return (
    <div className='eyes w-full h-screen cursor-pointer'>
        <div className="relative w-full h-full bg-cover bg-center bg-[url('src/assets/eyes.jpg')]">
            <div className="absolute flex gap-[40px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">

                <div className="circle-1 w-[210px] h-[210px] flex justify-center items-center rounded-full bg-[#F4F4F4]">
                    <div className="black-circle relative overflow-hidden w-[130px] h-[130px] flex justify-center items-center rounded-full bg-[#212121] text-[#F4F4F4] text-[18px]">PLAY
                        <div className="line absolute w-full h-[17px]">
                            <div className="w-[17px] h-[17px] rounded-full bg-[white] ml-[3px]"></div>
                        </div>
                    </div>
                </div>

                <div className="circle-1 w-[210px] h-[210px] flex justify-center items-center rounded-full bg-[#F4F4F4]">
                    <div className="black-circle relative overflow-hidden w-[130px] h-[130px] flex justify-center items-center rounded-full bg-[#212121] text-[#F4F4F4] text-[18px]">PLAY
                        <div className="line absolute w-full h-[17px]">
                            <div className="w-[17px] h-[17px] rounded-full bg-[white] ml-[3px]"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Eyes