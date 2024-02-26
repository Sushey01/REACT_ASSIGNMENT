import React from 'react'
import Shekhar from '../assets/shekhar.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-5 px-4'>
        <h1 className='justify-content: center text-3xl font-bold text-gray-500'>My Skills & Projects</h1>
        <img src={Shekhar} alt='/' />
        <div className='justify-center max-w-[350px] mx-auto grid md:grid-cols-2 p-25 py-10'>
        </div>
    </div>
  )
}

export default Analytics



