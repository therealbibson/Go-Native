import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { RiKeynoteFill } from "react-icons/ri";
import { HiRectangleStack } from "react-icons/hi2";

function useDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return { open, setOpen, ref }
}

export const Community: React.FC = () => {
  const { open, setOpen, ref } = useDropdown()

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(prev => !prev)}>
        Community
      </button>

      {open && (
        <div className='flex flex-col absolute top-full left-0 bg-[#0a1021] border border-[#242938] rounded-xl p-2 z-50'>
          <a href="https://twitter.com" target="_blank" className='flex items-center gap-4' rel="noopener noreferrer" onClick={() => setOpen(false)}><BsTwitterX /> X/Twitter</a>
          <a href="https://t.me" target="_blank" className='flex items-center gap-4' rel="noopener noreferrer" onClick={() => setOpen(false)}><FaTelegramPlane /> Telegram</a>
          <a href="https://discord.com" target="_blank" className='flex items-center gap-4' rel="noopener noreferrer" onClick={() => setOpen(false)}><FaDiscord /> Discord</a>
          <Link to="/newsletter" className='flex items-center gap-4' onClick={() => setOpen(false)}><SiGooglenews /> Newsletter</Link>
        </div>
      )}
    </div>
  )
}

export const Developers: React.FC = () => {
  const { open, setOpen, ref } = useDropdown()

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(prev => !prev)}> 
        Developers
      </button>

      {open && (
        <div className='flex flex-col absolute top-full left-0 bg-[#0a1021] border border-[#242938] rounded-xl p-2 z-50'>
          <a href="https://github.com" target="_blank" className='flex items-center gap-4' rel="noopener noreferrer" onClick={() => setOpen(false)}><FaGithub /> Github</a>
        </div>
      )}
    </div>
  )
}

export const Resources: React.FC = () => {
  const { open, setOpen, ref } = useDropdown()

  return (
    <div ref={ref} className='relative'>
      <button onClick={() => setOpen(prev => !prev)}>
        Resources
      </button>

      {open && (
        <div className='flex flex-col absolute top-full left-0 bg-[#0a1021] border border-[#242938] rounded-xl p-2 w-55 z-50'>
          <a href="/byield-deck" target="_blank" className='flex items-center gap-4' rel="noopener noreferrer" onClick={() => setOpen(false)}><HiRectangleStack /> BYield Deck</a>
          <a href="/keynotes" target="_blank" className='flex items-center gap-4' rel="noopener noreferrer" onClick={() => setOpen(false)}><RiKeynoteFill /> Keynotes & Interviews</a>
          <Link to="/faqs" className='flex items-center gap-4' onClick={() => setOpen(false)}><FaQuestionCircle /> FAQs</Link>
        </div>
      )}
    </div>
  )
}