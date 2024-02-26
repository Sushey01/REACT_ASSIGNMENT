import React from 'react';
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>TO REACH THE PEAK</p>
        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Be strong and courageous.</h1>
        <div>
            <p className='md:text-4xl sm:text-2xl text-xl font-bold py-4'>Fast, flexible & Creative</p>
            <ReactTyped
            className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
            strings={['SUCCESS', 'WILL', 'FOLLOW', 'YOU']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 py-2 '>Don't watch the clock; do what it does. Keep going until SUCCESS FOLLOWS YOU.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Download CV</button>
      </div>
    </div>
  )
}

export default Hero;
