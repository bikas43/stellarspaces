import React from 'react'
import LandingPage1 from '../Assets/LandingPage/LandingPage1'
import LandingPageSection1 from '../Components/Sections/LandingPageSection/LandingPageSection1'
import LandingPageSection2 from '../Components/Sections/LandingPageSection/LandingPageSection2'
import LandingPageSection0 from '../Components/Sections/LandingPageSection/LandingPageSection0'
import PropertyGrid from '../Components/Sections/ProportyGrid/PropertyGrid '

const Home = () => {
  return (
    <div style={{width:'99vw',height:'auto', overflow:'hidden', position:'relative'}}>
      <LandingPage1/>
      <LandingPageSection0/>
      <LandingPageSection2/>
      <LandingPageSection1/>
      <PropertyGrid/>
    </div>
  )
}

export default Home
