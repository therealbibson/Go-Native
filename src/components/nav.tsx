import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { Community, Developers, Resources } from './navDropdowns' 

const Nav = () => {
  return (
    <div className='fixed top-10 left-0 right-0 z-50 flex justify-center px-4'>
      <div className='flex justify-between items-center gap-10 bg-[#0a1021] text-white border border-[#242938] px-2 h-[60px] rounded-2xl w-full max-w-4xl'>
        
        <div className='w-[120px]'>
          <Link to='/'>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className='flex gap-5 items-center'>
          <Community />
          <Developers />
          <Resources />
          <Link to='/beelievers'>Beelievers</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/team'>Team</Link>
        </div>

        <div className='bg-[#f7951e] p-2 px-4 rounded-md'>
          <Link to='/tryTestnet' target="_blank">Try Testnet</Link>
        </div>

      </div>
    </div>
  )
}

export default Nav