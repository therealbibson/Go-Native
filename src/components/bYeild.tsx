import React from 'react'
import { TbHandClick } from "react-icons/tb";
import { FaKey, FaCoins, FaBitcoin } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoFlash } from "react-icons/io5";
import MarketImg from '../assets/images/tokensImg.jpg'

const bYeild = () => {
  return (
    <div className='text-white'>
      <div className='mb-15 text-center font-bold flex flex-col gap-7'>
        <h2 className='text-5xl'>BYield: <span className='text-3xl text-[#f7951e]'>The Bitcoin Yield Hub</span></h2>
        <p className='text-[#6e727d]'>BYield is Native’s Bitcoin Yield Hub, offering a simple and secure way to earn yield <br />on Bitcoin without bridging, wrapping, or trusting custodians.</p>
      </div>

      <div className='flex justify-center gap-10 mb-12'>
        <div className='p-5 border dorder-[#1f2431] rounded-2xl flex flex-col gap-5 w-[280px] h-[160px] font-bold transition hover:border-[#f7951e] transform'>
          <h3 className='text-[#f7951e] flex gap-2'><TbHandClick className='text-2xl' /> One-Click Bitcoin Yield</h3>
          <p>Deposit BTC and start earning <br />instantly.</p>
        </div>
        <div className='p-5 border dorder-[#1f2431] rounded-2xl flex flex-col gap-5 w-[280px] h-[160px] font-bold transition hover:border-[#f7951e] transform'>
          <h3 className='text-[#f7951e] flex gap-2'><FaKey className='text-2xl' /> Non-Custodial</h3>
          <p>Your Bitcoin stays under your <br />control.</p>
        </div>
        <div className='p-5 border dorder-[#1f2431] rounded-2xl flex flex-col gap-5 w-[280px] h-[160px] font-bold transition hover:border-[#f7951e] transform'>
          <h3 className='text-[#f7951e] flex gap-2'><FaCoins className='text-2xl' /> Sui Integration</h3>
          <p>High-speed, low-cost <br />transactions for maximum <br />efficiency.</p>
        </div>
      </div>

      <div className='flex justify-center gap-10 mb-12 pr-20'>
        <div className='p-5 border dorder-[#1f2431] rounded-2xl flex flex-col gap-1 w-[280px] h-[160px] font-bold transition hover:border-[#f7951e] transform'>
          <h3 className='text-[#f7951e] flex gap-2'><MdVerified className='text-2xl' /> Native Lightning <br />Integration</h3>
          <p className='text-[14px]'>Native integrates directly with the <br />Lightning Network. This removes <br />the wait and cost of L1 Bitcoin <br />transactions.</p>
        </div>
        <div className='p-5 border dorder-[#1f2431] rounded-2xl flex flex-col gap-1 w-[280px] h-[160px] font-bold transition hover:border-[#f7951e] transform'>
          <h3 className='text-[#f7951e] flex gap-2'><IoFlash className='text-2xl' /> Zero Trust Architecture</h3>
          <p className='text-[14px]'>Powered by Native’s tech, it <br />eliminates the risk from bridges <br />and centralized custodians.</p>
        </div>
        <div className='p-5 border dorder-[#1f2431] rounded-2xl flex flex-col gap-1 w-[280px] h-[160px] font-bold transition hover:border-[#f7951e] transform'>
          <h3 className='text-[#f7951e] flex gap-2'><FaBitcoin className='text-2xl' /> The Best Yield Solutions</h3>
          <p className='text-[14px]'>Aggregates the best Bitcoin Yield <br />Opportunities on Sui.</p>
        </div>
      </div>

      <div>
        <img src={MarketImg} alt="Markets" className='mx-45 my-20 size-240 rounded-4xl center' />
      </div>
    </div>
  )
}

export default bYeild
