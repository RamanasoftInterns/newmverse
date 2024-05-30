import React from 'react'
import './VerseDetails.css';
import details from '../Assests/Details.png';
import frame1 from '../Assests/Frame 1.png';
import frame2 from '../Assests/Frame 2.png';
import frame3 from '../Assests/Frame 3.png';
import Groups from '../Assests/Group 65.png';
import groups from '../Assests/Group 57.png';
const VerseDetails = () => {
  return (
    <>

     <section className='parent'>
       <section className='child'>
       <img src={frame1} alt='' className='frame1'/>
       <img src={details} alt='' className='details'/>
       </section>
     </section>
     <section className='parent'>
       <section className='child'>
       <img src={groups} alt='' className='groups'/>
       <img src={frame2} alt='' className='frame2'/>
       </section>
   </section>
     <section className='parent'>
       <section className='child'>
       <img src={frame3} alt='' className='frame3'/>
       <img src={Groups} alt='' className='Groups'/>
       </section>
   </section>
     
    


    </>
  )
}

export default VerseDetails
