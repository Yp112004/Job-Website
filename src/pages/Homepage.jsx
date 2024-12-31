import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import Viewalljobs from '../components/Viewalljobs'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <HomeCards/>
      <JobListings isHome={true}/>
      <Viewalljobs/>
    </div>
  )
}

export default Homepage
