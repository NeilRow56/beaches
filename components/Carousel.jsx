import React, { useState } from 'react';
import Image from 'next/image'
import { BsArrowLeftSquareFill, 
    BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
]
function Carousel() {
    const [slide, setSlide ] = useState(0)
    const length = sliderData.length;
    // console.log(length)
  
    const prevSlide = () => {
      setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
      setSlide(slide === 0 ? length - 1 : slide - 1);
    };
  return (
    <div className='max-w-[1440px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <div className='absolute top-[50%] text-3xl text-white cursor-pointer left-[150px] z-20'>
      <BsArrowLeftSquareFill size={25}  onClick={prevSlide} />
      </div>
        <div className='absolute top-[50%] text-3xl text-white cursor-pointer right-[150px] z-20'>
        <BsArrowRightSquareFill className='' size={25} onClick={nextSlide} />
        </div>
        

        {sliderData.map((item, index) => (
            <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                 {index === slide && (
                <Image alt="" src={item.url} width={1200} height={800} className='w-full h-full rounded-md'/>
                 )}
            </div>
        ))}
    </div>
  )
}


export default Carousel