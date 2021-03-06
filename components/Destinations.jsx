import React from 'react'
import Image from 'next/image'

const Destinations = () => {
  return (
    <div className='max-w-[1440px] pt-5 md:py-20 px-4 text-center mx-auto'>
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean&apos;s Best Beaches</p>
        <div className='grid grid-rows-2 md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <div className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' > 
            <Image  alt="" src="/img/borabora2.jpg" width={700} height={500} layout='responsive' />
            </div>
            <div className='w-full h-full object-cover ' >
            <Image  alt="" src="/img/keywest.jpg" width={400} height={418} layout='responsive' />
            </div>
            <div className='w-full h-full object-cover '>
            <Image  alt="" src="/img/maldives.jpg" width={400} height={418} layout='responsive' />
            </div>
            <div className='w-full h-full object-cover mt-2 '>
            <Image  alt="" src="/img/maldives2.jpg" width={400} height={418} layout='responsive' />
            </div>
            <div className='w-full h-full object-cover mt-2 '>
            <Image  alt="" src="/img/maldives3.jpg" width={400} height={418} layout='responsive' />
            </div>
        </div>
    </div>
    
  )
}

export default Destinations