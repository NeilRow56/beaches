import React from 'react'
import Image from 'next/image'
import SelectCard from './SelectCard'
import Borabora from '../public/img/borabora.jpg'
import Borabora2 from '../public/img/borabora2.jpg'
import Keywest from '../public/img/keywest.jpg'
import Maldives from '../public/img/maldives.jpg'
import Maldives2 from '../public/img/maldives2.jpg'
import Maldives3 from '../public/img/maldives3.jpg'

function Selects() {
  return (
    <div className='max-w-[1440px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* <div className=' relative' > 
            <Image  alt="" src="/img/borabora2.jpg" width={400} height={400} layout='responsive' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <div className='left-4 bottom-4 absolute'>
            <p className=' text-2xl font-bold text-white '>Maldives</p>
            </div>
            </div>
        </div>
        <div className=' relative' > 
            <Image  alt="" src="/img/keywest.jpg" width={400} height={400} layout='responsive' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <div className='left-4 bottom-4 absolute'>
            <p className=' text-2xl font-bold text-white '>Key West</p>
            </div>
            </div>
        </div>
        <div className=' relative' > 
            <Image  alt="" src="/img/maldives.jpg" width={400} height={400} layout='responsive' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <div className='left-4 bottom-4 absolute'>
            <p className=' text-2xl font-bold text-white '>Antigua</p>
            </div>
            </div>
        </div>
        <div className=' relative' > 
            <Image  alt="" src="/img/maldives2.jpg"  width={400} height={400} layout='responsive' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <div className='left-4 bottom-4 absolute'>
            <p className=' text-2xl font-bold text-white '>Cozumel</p>
            </div>
            </div>
        </div>
        <div className=' relative' > 
            <Image  alt="" src="/img/maldives3.jpg" width={400} height={400} layout='responsive' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <div className='left-4 bottom-4 absolute'>
            <p className=' text-2xl font-bold text-white '>Maldives</p>
            </div>
            </div>
        </div>
        <div className=' relative' > 
            <Image  alt="" src="/img/borabora.jpg" width={400} height={400} layout='responsive' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <div className='left-4 bottom-4 absolute'>
            <p className=' text-2xl font-bold text-white '>Maldives</p>
            </div>
            </div>
        </div> */}

        <SelectCard bg={Borabora} text='Bora-Bora'/>
        <SelectCard bg={Borabora2} text='Antigua'/>
        <SelectCard bg={Maldives} text='Moldives'/>
        <SelectCard bg={Maldives2} text='Cozumel'/>
        <SelectCard bg={Maldives3} text='Jamaica'/>
        <SelectCard bg={Keywest} text='Key West'/>
    </div>
  )
}

export default Selects