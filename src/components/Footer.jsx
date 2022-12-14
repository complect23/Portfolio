import React from 'react'

export default function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg '>
        <a href='#hero' className='block text-xl md:text-2xl font-semibold'>Andrew Nasser</a>
        <a href='mailto:ishakandrew82@gmail.com' 
        className=' text-sm md:text-md hover:text-indigo-500 '
        >ishakandrew82@gmail.com</a>
        <p className='text-xs  mt-2 text-gray-500 '>
        © Andrew nasser {new Date().getFullYear()}. All Rights Reserved
        </p>
    </div>
  )
}

 