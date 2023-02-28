import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy/>
      <Slide/>
    </div>
  )
}

export default Home