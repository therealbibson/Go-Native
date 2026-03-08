import React from 'react'
import EcosystemImg from '../assets/images/ecosystemImg.jfif'

const Ecosystem = () => {
  return (
    <div>
      <p className='h-0.5 w-100% bg-[#d78e38] mx-70 my-10'></p>
      <div className='text-3xl font-bold text-white text-center flex flex-col gap-5 px-15'>
        <h3>Ecosystem & Partners</h3>
        <img src={EcosystemImg} alt="Ecosystem" className='w-300 center' />
      </div>
    </div>
  )
}

export default Ecosystem
