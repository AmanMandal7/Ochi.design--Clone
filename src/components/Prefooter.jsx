import React, { useEffect, useState } from 'react'

const Prefooter = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
      window.addEventListener("mousemove", (e)=> {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX =  window.innerWidth/2 - mouseX;
        let deltaY =  window.innerHeight/2 - mouseY;

        var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRotate(angle);
      })
    },)

  return (
    <div className='relative w-full min-h-screen bg-[#CDEA68]'>

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

        <div className="eyes absolute flex gap-[40px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <div className="circle-1 relative w-[185px] h-[185px] flex justify-center items-center rounded-full bg-[#F4F4F4]">
                    <div className="black-circle absolute overflow-hidden w-[110px] h-[110px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#212121] text-[#F4F4F4] text-[18px]">
                        <div className="text absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">PLAY</div>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-[17px]">
                            <div className="w-[14px] h-[14px] rounded-full bg-[white] ml-[1.5px]"></div>
                        </div>
                    </div>
                </div>

                <div className="circle-2 w-[185px] h-[185px] flex justify-center items-center rounded-full bg-[#F4F4F4]">
                    <div className="black-circle relative overflow-hidden w-[110px] h-[110px] flex justify-center items-center rounded-full bg-[#212121] text-[#F4F4F4] text-[18px]">PLAY
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-[17px]">
                            <div className="w-[14px] h-[14px] rounded-full bg-[white] ml-[1.5px]"></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Prefooter