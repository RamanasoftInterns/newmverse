import React from 'react'
import './Profile.css';
import Group from '../Assests/Group 52.png';
import users from '../Assests/users.png';
import Grained from '../Assests/Grained.png';

const Profile = () => {
  return (
    <>
    <div className='profile'>
      <div className='profile-img'>
          <img src={Group} alt='' />
           <h2>Validated Profiles</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi vitae, rerum id sequi dicta magnam tempore nesciunt provident, fugiat accusantium laboriosam quasi minima neque aliquid obcaecati cupiditate iure culpa.</p>
        </div>  
      <div className='profile-img'>
          <img src={users} alt='' />
           <h2>AI-Powered Matchmaking</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi vitae, rerum id sequi dicta magnam tempore nesciunt provident, fugiat accusantium laboriosam quasi minima neque aliquid obcaecati cupiditate iure culpa.</p>
        </div>  
      <div className='profile-img'>
          <img src={Grained } alt='' />
           <h2>Fine-grained filtering </h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi vitae, rerum id sequi dicta magnam tempore nesciunt provident, fugiat accusantium laboriosam quasi minima neque aliquid obcaecati cupiditate iure culpa.</p>
        </div>  
    </div>
    <div className='btn-profile'>
        <button>Try for free</button>
    </div>
    </>
  )
}

export default Profile
