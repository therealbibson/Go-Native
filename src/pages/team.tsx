import React from 'react'
import NativeTeam from '../components/nativeTeam'
import NativeAdvisors from '../components/nativeAdvisors'

const Team = () => {
  return (
    <div className='bg-[#060b1a] min-h-screen'>
      <NativeTeam />
      <NativeAdvisors />
    </div>
  )
}

export default Team
