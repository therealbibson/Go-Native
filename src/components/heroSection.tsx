import React from 'react'
import HeroImg from '../assets/images/heroImg.png'

const HeroSection = () => {
  return (
    <div>
      <div className='bg-[#f7951e] text-white font-bold'>
        <p>BELIEVE IN REAL BITCOIN DEFI AND BECOME BEELIEVER •</p>
      </div>

      <div className='text-white flex flex-col items-center m-50 mb-30 font-bold'>
        <p className='text-2xl bg-[#0e1527] rounded-3xl p-2 px-3 mb-10 border border-[#202939]'>The Bitcoin Yield Hub</p>
        <h2 className='text-5xl font-medium mb-10'>Earn Bitcoin Yield with a <span className='text-2xl bg-[#e7812c] rounded-md p-2 px-3 cursor-pointer'>Single Click</span></h2>
        <p className='text-[20px] text-[#90939e] mb-10'>Secure way to put your Bitcoin to work.</p>
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  )
}

export default HeroSection
