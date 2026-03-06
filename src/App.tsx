import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import LandingPage from './pages/landingPage'
import Beelievers from './pages/beelievers'
import Blogs from './pages/blogs'
import Team from './pages/team'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/beeliever' element={<Beelievers />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
