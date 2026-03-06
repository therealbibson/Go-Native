import React from 'react'
import NewsLetter from '../components/newsLetter'
import HeroSection from '../components/heroSection'
import Ecosystem from '../components/ecosystem'
import Faqs from '../components/faqs'
import BYeild from '../components/bYeild'

const LandingPage = () => {
  return (
    <div className='bg-[#060b1a] min-h-screen'>
      <HeroSection />
      <BYeild />
      <Ecosystem />
      <Faqs />
      <NewsLetter />
    </div>
  )
}

export default LandingPage
