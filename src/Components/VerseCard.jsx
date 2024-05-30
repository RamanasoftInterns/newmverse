import React from 'react'
import './VerseCard.css'
import googlePlay from '../Assests/GooglePlay.png';
import couple from '../Assests/couples.png';
import AppleStore from '../Assests/AppleStore.png';
const VerseCard = () => {
  return (
    <>
      <div className='logo-couple'>  
        <div className='logo-details'>
        <div className='couples-img'>
           <img src={couple} alt='' className='img'/>
        </div>
        <div className='contents-logo'>
        <h1>Find your <span className='matches'>perfect match</span> </h1>
         <p>Actor enim consectetur scelerisque vitae non at.
          velit duriterus integer slit condimentum.</p>
          </div>
        </div>
           </div> 
           <div className='playstores'>
             <img src={googlePlay} alt='' />
             <img src={AppleStore} alt='' />
           </div>        
    </>
  )
}

export default VerseCard
