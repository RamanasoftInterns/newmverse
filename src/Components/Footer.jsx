import React from 'react'
import './Footer.css';
import foot from '../Assests/footer.png';
import logo from '../Assests/MarriageLogo.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer'>
          <img src={logo} alt='' className='logo-footer'/>
          <p className='para'>Marriage Verse</p>
          <ul>
            <li className='elem'>About</li>
            <li className='elem'>Blog</li>
            <li className='elem'>Carrers</li>
          </ul>
          <div className='copyright'>
             <p>Copyright © Marriages Verse.<span> All rights are reserved</span></p>
          </div>
          <div className='foot'>
             <img src={foot} alt=''/>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
