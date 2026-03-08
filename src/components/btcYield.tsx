import React from 'react'
import YieldImg1 from '../assets/images/howImg1.jfif'
import YieldImg2 from '../assets/images/howImg2.jfif'
import YieldImg3 from '../assets/images/howImg3.jfif'
import { Link } from 'react-router-dom'
import FlyBTCLogo from '../assets/images/flyBTC.png'
import TrustImg from '../assets/images/trustImg.jfif'

const BtcYield = () => {
  return (
    <div>
      <p className='h-0.5 w-100% bg-[#d78e38] mx-70 my-10'></p>

      <div className='bg-[#090f23] border border-[#1f2431] rounded-2xl m-10 pb-20'>
        <div className='text-center font-bold text-white flex flex-col gap-5 my-10'>
          <h2 className='text-3xl'> How <span className='text-[#f7951e]'>Bitcoin Yield Hub works</span></h2>
          <p className='text-[#6e727d]'>Native is a next-generation interoperability solution designed to overcome <br />Bitcoin’s limitations and establish Bitcoin as a core asset in DeFi.</p>
          <div><Link to='' className='p-2 px-4 border border-[#282c3a] rounded-md bg-[#101523] text-2xl'>3 step process</Link></div>
        </div>

        <div className='flex justify-center gap-5 text-white font-bold'>
          <div className='p-2 border border-[#1f2431] rounded-2xl flex flex-col gap-2 transition hover:border-[#f7951e] transform'>
            <img src={YieldImg1} alt="YieldImg1" className='rounded-2xl' />
            <p className='mb-20'>1.  Connect to your Wallet</p>
          </div>
          <div className='p-2 border border-[#1f2431] rounded-2xl flex flex-col gap-2 transition hover:border-[#f7951e] transform'>
            <img src={YieldImg2} alt="YieldImg1" className='rounded-2xl' />
            <p className='mb-20'>1.  Connect to your Wallet</p>
          </div>
          <div className='p-2 border border-[#1f2431] rounded-2xl flex flex-col gap-2 transition hover:border-[#f7951e] transform'>
            <img src={YieldImg3} alt="YieldImg1" className='rounded-2xl' />
            <p className='mb-20'>1.  Connect to your Wallet</p>
          </div>
        </div>
      </div>



      <div className='bg-[#090f23] border border-[#1f2431] rounded-2xl pt-10 m-10 pb-20 px-5 text-white font-bold flex flex-col gap-1 relative'>
        <h1 className='text-3xl'>Why nBTC?</h1>
        <p>nBTC is a non-custodial, trust-minimized representation of Bitcoin, maintaining a 1:1 backing with real BTC. It brings Bitcoin’s liquidity into DeFi while <br />preserving user control and aligning with Bitcoin’s core principles. Designed with security, decentralization, and permissionless verification at its core, <br />nBTC enables users to transact, stake, and engage in DeFi with Bitcoin, all without compromising sovereignty.</p>
        <h1 className='text-3xl'>Why Protocols Choose nBTC</h1>
        <h3>nBTC brings the deepest asset in crypto - Bitcoin - into DeFi with security developers can trust.</h3>
        <p>Built on IKA's zero-trust MPC architecture, nBTC delivers Bitcoin to any Sui app without custodians, bridges, or attack-surface bloat.</p>
        <p>For builders, that means:</p>
        <h3 className='text-2xl'>Instant access to Bitcoin’s $2T+ liquidity</h3>
        <p>Plug nBTC into lending, LP, perps, options, stablecoins - your TVL and volumes scale instantly.</p>
        <h3 className='text-2xl'>Production-grade security</h3>
        <p>‍Backed by battle-tested 2PC–MPC, nBTC removes the bridge-risk and multisig nightmares that killed BTC bridges in the past.</p>
        <h3 className='text-2xl'>Composable by design</h3>
        <p>nBTC is native to Sui: move, borrow, LP, mint, stake, leverage - everything works out-of-the-box, no wrapping games.</p>
        <h3 className='text-2xl'>Higher yield for your users</h3>
        <p>Bitcoin holders finally get real DeFi yield, and your protocol becomes the gateway for it.</p>
        <h3 className='text-2xl'>Bring Bitcoin into your protocol. Attract more users. Unlock deeper liquidity.</h3>
        <h3 className='text-2xl'>Build with nBTC.</h3>
        <img src={FlyBTCLogo} alt="" className='absolute size-30 bottom-10 right-5' />
      </div>



      <div className='bg-[#090f23] border border-[#1f2431] rounded-2xl m-10 mx-20 p-5 pb-20 text-center text-white text-3xl font-bold flex flex-col gap-5'>
        <h1>Trust Spectrum <span className='text-[#f7951e]'>of BTC Interoperability</span></h1>
        <img src={TrustImg} alt="TrustImg" />
      </div>
    </div>
  )
}

export default BtcYield
