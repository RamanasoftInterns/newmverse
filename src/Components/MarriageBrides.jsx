import React from 'react'
import './MarriageBrides.css'
import images from '../Assests/BridesImgs.png';
const MarriageBrides = () => {
  return (
    <>
    <div className='images'>
       <div className='bride-img'>
       <img src={images} alt='' className='marriage-imgs'/>
       </div>
      </div>
    </>
  )
}

export default MarriageBrides
