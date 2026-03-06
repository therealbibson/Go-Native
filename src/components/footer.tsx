import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane, FaDiscord, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[rgb(6,11,26)]'>
      <p className='h-0.5 w-100% bg-[#d78e38] mx-70 my-10'></p>
      <div className='text-white flex justify-center pb-20 font-bold gap-50'>
        <div>
          <div className='w-[150px]'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='flex gap-2'>
            <div className='border p-1 border-[#242938] rounded-md cursor-pointer'>
              <BsTwitterX />
            </div>
            <div className='border p-1 border-[#242938] rounded-md cursor-pointer'>
              <FaTelegramPlane />
            </div>
            <div className='border p-1 border-[#242938] rounded-md cursor-pointer'>
              <FaGithub />
            </div>
            <div className='border p-1 border-[#242938] rounded-md cursor-pointer'>
              <FaDiscord />
            </div>
            <div className='border p-1 border-[#242938] rounded-md cursor-pointer'>
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <p>Developers</p>
          <Link to='' className='text-[#90939e] transition hover:text-white transform'>Docs (coming soon)</Link>
          <Link to='' className='text-[#90939e] transition hover:text-white transform'>Github</Link>
        </div>

        <div className='flex flex-col gap-1'>
          <p>Company</p>
          <Link to='' className='text-[#90939e] transition hover:text-white transform'>Team</Link>
          <Link to='' className='text-[#90939e] transition hover:text-white transform'>Blogs</Link>
          <Link to='' className='text-[#90939e] transition hover:text-white transform'>Brand Kits</Link>
        </div>
      </div>

      <div className='p-10 pb-0 text-[#90939e] m-20 mb-0 ml-80 font-bold'>
        <p>Copyright © 2024 Native | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
