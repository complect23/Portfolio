import React from 'react'
import SectionTitle from './SectionTitle'

 function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20 '>

    <div className='w-full md:w-6/12'>

    <SectionTitle>About Me</SectionTitle>
    <p className='text-md text-gray-600 dark:text-gray-300 '>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at!

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure eum obcaecati nostrum at quod.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt incidunt accusamus eum natus itaque quod similique at? Odit consequatur dignissimos quo minima ratione eos cumque rerum quod, animi sunt.

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatum.
    </p>
   <a href='mailto:ishakandrew82@gmail.com'
   className='block mt-3 text-md md:text-lg 
    text-gray-700
     dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'
   >ishakandrew82@gmail.com</a>
    </div>

    <img src='./Assets/About me.jpg' alt='Andrew' className='w-full md:w-6/12 rounded-lg object-cover'></img>
    </div>
  )
}

export default About