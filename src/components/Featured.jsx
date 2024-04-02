import React from 'react'

const Featured = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.1' className='w-full pt-[80px] font-[NeueMontreal] text-[#212121]'>
        <h1 className='text-[3.5vw] px-14'>Featured projects</h1>
        <div className='border-t-[1px] mt-[20px] border-t-[#b2b2b2]'></div>


        <div className="cards mx-14 my-16 flex gap-[20PX] flex-wrap">
            <div className="cardContainer w-[calc(50%-10px)] mb-5">
                <div className="text flex items-center gap-[10px]">
                    <p className='w-[10px] h-[10px] rounded-full bg-[#212121]'></p>
                    <h5>FYDE</h5>
                </div>
                {/* Main Card  */}
                <div className="parent-card relative h-[80vh] pt-4">
                    {/* <h1 className='absolute z-10 font-[FoundersGrotesk] text-[10vw] leading-none text-[#CDEA68] left-[100%] top-[50%] translate-x-[-47%] translate-y-[-50%]'>
                        {"FYDE".split('').map((item, index)=> <span key={index}>{item}</span>)}
                    </h1> */}
                    <div className="child-card w-full h-full rounded-lg cursor-pointer">
                        <img src="src/assets/img-1.png" alt="" className='w-full h-full bg-cover'/>
                    </div>
                </div>
                <div className="buttons pt-4 flex gap-[10px]">
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>AUDIT</button>
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>COPYWRITING</button>
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>SALES DESK</button>
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>SALIDES DESIGN</button>
                </div>
            </div>

            <div className="cardContainer w-[calc(50%-10px)] mb-5">
                <div className="text flex items-center gap-[10px]">
                    <p className='w-[10px] h-[10px] rounded-full bg-[#212121]'></p>
                    <h5>VISE</h5>
                </div>
                <div className="parent-card relative h-[80vh] pt-4">
                    <h1 className='absolute font-[FoundersGrotesk] text-[10vw] leading-none text-[#CDEA68] right-[100%] top-[50%] translate-x-[50%] translate-y-[-50%]'>
                        {"VISE".split('').map((item, index)=> <span key={index}>{item}</span>)}
                    </h1>
                    <div className="child-card w-full h-full rounded-lg cursor-pointer">
                    <img src="src/assets/img-2.jpg" alt="" className='w-full h-full bg-cover'/>
                    </div>
                </div>
                <div className="buttons pt-4 flex gap-[10px]">
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>AGECNY</button>
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>COMPANY PRESENTATION</button>
                </div>
            </div>

            <div className="cardContainer w-[calc(50%-10px)] mb-5">
                <div className="text flex items-center gap-[10px]">
                    <p className='w-[10px] h-[10px] rounded-full bg-[#212121]'></p>
                    <h5>TRAWA</h5>
                </div>
                <div className="parent-card relative h-[80vh] pt-4">
                    {/* <h1 className='absolute z-10 font-[FoundersGrotesk] text-[10vw] leading-none text-[#CDEA68] left-[100%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        {"TRAWA".split('').map((item, index)=> <span key={index}>{item}</span>)}
                    </h1> */}
                    <div className="child-card w-full h-full rounded-lg cursor-pointer">
                    <img src="src/assets/img-3.jpg" alt="" className='w-full h-full bg-cover'/>
                    </div>
                </div>
                <div className="buttons pt-4 flex gap-[10px]">
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>BRAND IDENTITY</button>
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>DESIGN RESEARCH</button>
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>INVESTOR DECK</button>
                </div>
            </div>

            <div className="cardContainer w-[calc(50%-10px)] mb-5">
                <div className="text flex items-center gap-[10px]">
                    <p className='w-[10px] h-[10px] rounded-full bg-[#212121]'></p>
                    <h5>PREMIUM BLEND</h5>
                </div>
                <div className="parent-card relative h-[80vh] pt-4">
                    <h1 className='absolute font-[FoundersGrotesk] text-[10vw] leading-none text-[#CDEA68] right-[100%] top-[50%] translate-x-[50%] translate-y-[-50%]'>
                        {"PREMIUMBLEND".split('').map((item, index)=> <span key={index}>{item}</span>)}
                    </h1>
                    <div className="child-card w-full h-full rounded-lg cursor-pointer">
                    <img src="src/assets/img-4.png" alt="" className='w-full h-full bg-cover'/>
                    </div>
                </div>
                <div className="buttons pt-4 flex gap-[10px]">
                    <button className='border border-[#212121] px-[13px] py-[3px] rounded-full'>BRANDED TEMPLATE</button>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center'>
             <button className='uppercase px-[30px] py-[17px] mt-[25px] bg-[#212121] text-[#fff] rounded-full flex items-center'>VIEW ALL CASE STUDIES
                <div className='w-[8px] h-[8px] bg-[#fff] rounded-full ml-[20px]'></div>
            </button>
        </div>

    </div>
  )
}

export default Featured