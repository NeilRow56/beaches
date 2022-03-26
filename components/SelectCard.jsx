import React from 'react'
import Image from 'next/image'



function SelectCard(props) {
  return (
    <div className=' relative' > 
            <Image  alt="" src={props.bg} width={400} height={400} layout='responsive' />
    <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <div className='left-4 bottom-4 absolute'>
            <div   p className=' text-2xl font-bold text-white '>{props.text}
            </div>
        </div>
    </div>
    </div>
  )
}

export default SelectCard
