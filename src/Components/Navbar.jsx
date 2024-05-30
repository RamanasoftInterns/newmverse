import React from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import Googleplay from '../Assests/GooglePlay.png';
import AppleStore from '../Assests/AppleStore.png';
import menu from '../Assests/menu.png';
const Navbar = () => {
  return (
    <div>
        <img src={menu} alt='' className='menu-icon'/>
      <div className='Navbar'>
        <img src={logo} alt='' className='logos' />
        <ul>
          <li className='item'>About</li>
          <li className='item'>Blog</li>
          <li className='item'>Carrers</li>
        </ul>
        <div className='div-tools'>
          <img src={Googleplay} alt='' className='img-navbar'/>
          <img src={AppleStore} alt='' className='img-navbar'/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
