import React from 'react'
import './Home.css'
import LandingPage3 from '../Assets/LandingPage/LandingPage3'
import LandingPageSection1 from '../Components/Sections/LandingPageSection/LandingPageSection1'
import LandingPageSection2 from '../Components/Sections/LandingPageSection/LandingPageSection2'
import LandingPageSection0 from '../Components/Sections/LandingPageSection/LandingPageSection0'
import PropertyGrid from '../Components/Sections/ProportyGrid/PropertyGrid '

const Home = () => {
  return (
    <div className='home'>
    <LandingPageSection0/>
    {/*
      <LandingPageSection2/>
      <LandingPage3/>
      <PropertyGrid/>
      <LandingPageSection1/>
      */}
    </div>
  )
}

export default Home
