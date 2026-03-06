import React from 'react'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className='bg-[#ffdbb0] rounded-2xl mx-55'>
      <div className='flex flex-col items-center p-10'>
        <div className='flex flex-col items-center'>
          <p className='text-2xl font-medium'>Make your</p>
          <h3 className='text-5xl font-bold'>Bitcoin work for you</h3>
        </div>
        <div className='flex gap-5'>
          <Link to='' className='p-2 my-5 px-4 bg-black text-white font-bold rounded-md transition hover:text-[#f7801f] transform'>contact our Team</Link>
          <Link to='' className='p-2 my-5 px-4 bg-[#ffdbb0] font-bold rounded-md border border-[#f7801f] transition hover:text-[#302f2f] transform'>Read Docs (Soon)</Link>
        </div>
      </div>

      <div className='bg-[#f7801f] rounded-2xl flex justify-between items-center p-10 text-white font-medium'>
        <div>
          <h3 className='text-2xl'>Subscribe to our newsletter</h3>
          <p className='text-[20px]'>to get latest news about Native</p>
        </div>
        <div>
          <form action="" className='flex gap-5'>
            <input className='bg-[#f9994c] border border-[#fccca5] p-2 px-4 rounded-md pr-10' type="text" placeholder='Enter Email' />
            <button className='bg-black p-1 px-4 rounded-md font-bold cursor-pointer'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
