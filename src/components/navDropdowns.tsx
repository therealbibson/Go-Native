import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ── Shared hook ────────────────────────────────────────────────────────────
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

// ── Community Dropdown ─────────────────────────────────────────────────────
export const Community: React.FC = () => {
  const { open, setOpen, ref } = useDropdown()

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <a className='bg-[#0a1021] text-white cursor-pointer' onClick={() => setOpen(prev => !prev)}>
        Community 
      </a>

      {open && (
        <div className='flex flex-col'>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            X/Twitter
          </Link>
          <Link to="https://t.me" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Telegram
          </Link>
          <Link to="https://discord.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Discord
          </Link>
          <Link to="/newsletter" onClick={() => setOpen(false)}>
            Newsletter
          </Link>
        </div>
      )}
    </div>
  )
}

// ── Developers Dropdown ────────────────────────────────────────────────────
export const Developers: React.FC = () => {
  const { open, setOpen, ref } = useDropdown()

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <a className='bg-[#0a1021] text-white cursor-pointer' onClick={() => setOpen(prev => !prev)}>
        Developers 
      </a>

      {open && (
        <div className='flex flex-col'>
          <Link to="https://github.com" target="_blank" rel="noopener noreferrer">
            Github
          </Link>
        </div>
      )}
    </div>
  )
}

// ── Resources Dropdown ─────────────────────────────────────────────────────
export const Resources: React.FC = () => {
  const { open, setOpen, ref } = useDropdown()

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <a className='bg-[#0a1021] text-white cursor-pointer' onClick={() => setOpen(prev => !prev)}>
        Resources 
      </a>

      {open && (
        <div className='flex flex-col'>
          <Link to="/byield-deck" onClick={() => setOpen(false)}>
            BYield Deck
          </Link>
          <Link to="/keynotes" onClick={() => setOpen(false)}>
            Keynotes & Interviews
          </Link>
          <Link to="/faqs" onClick={() => setOpen(false)}>
            FAQs
          </Link>
        </div>
      )}
    </div>
  )
}