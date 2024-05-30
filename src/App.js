import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import MarriageBrides from './Components/MarriageBrides'
import Photos from './Components/Photos'
import Profile from './Components/Profile'
import VerseCard from './Components/VerseCard'
import Footer from './Components/Footer'
import VerseDetails from './Components/VerseDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
      <div className='app-container'>
      <Navbar/>
       <Home/>
       <Photos/>
       <Profile/>
       <MarriageBrides/>
       <VerseDetails/>
       <VerseCard/>
       <Footer/>
      </div>
    </div>
  )
}

export default App
