import React from 'react'
import './Home.css'
import FeatureInfo from '../../featureinfo/FeatureInfo'
import NewChart from '../../allchart/NewChart'
const Home = () => {
  return (
    <div className='home'>
      <FeatureInfo/>
      <NewChart/>
    </div>
  )
}

export default Home
