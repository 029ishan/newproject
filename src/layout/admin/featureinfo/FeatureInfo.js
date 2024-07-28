import React from 'react'
import './Feature.css'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const FeatureInfo = () => {
  return (
   <div className="featured">
    <div className="featuredItem">
        <span className="featureTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <spain className="featuredMoney">$5,681</spain>
            <spain className="featuredMoneyRate">-5.5 <FaArrowDown className='featuredIconsnegative' /></spain>
        </div>
        <span className="featuredSub">Compared to last Month</span>
    </div>
    <div className="featuredItem"> 
        <span className="featureTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <spain className="featuredMoney">$4,655</spain>
            <spain className="featuredMoneyRate">-15.5 <FaArrowDown className='featuredIconsnegative' /></spain>
        </div>
        <span className="featuredSub">Compared to last Month</span>
    </div>
    <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <spain className="featuredMoney">$5,681</spain>
            <spain className="featuredMoneyRate">+3.7 <FaArrowUp className='featuredIcons' /></spain>
        </div>
        <span className="featuredSub">Compared to last Month</span>
    </div>
   </div>
  )
}

export default FeatureInfo
