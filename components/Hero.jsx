import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

function Hero() {
  return (
    <div className='h-screen w-full relative'>
        <video
        
      className='w-full h-full object-cover'
       autoPlay
        loop
        muted
       
        >
        <source src="/img/beachVid.mp4" type="video/mp4"/>
        </video>
        {/* Overlay */}
        <div className='absolute w-full h-full top-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1>First Class Travel</h1>
          <h2 className='py-4'>Top Locations Worldwide</h2>
          <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
            <div>
              <input className='bg-transparent w-[280px] sm:w-[400px] focus:outline-none' type="text" placeholder='Search Destinations'/>
            </div>
            <div>
              <button><AiOutlineSearch size={20} className='icon' style={{color:'#ffff'}}/></button>
            </div>
          </form>
        </div>
      
    </div>
  )
}

export default Hero
