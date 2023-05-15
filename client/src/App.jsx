import React from 'react'
import NavBar from './NavBar/NavBar'
import MainPage from './MainPage/MainPage'
import Footer from './Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className='app'>
    <div className='container'>
        <NavBar />
        <MainPage />
        <Footer />
    </div>
    <circle className='bg1'/>
    <circle className='bg2'/>  

    <circle className='figure1'/>
    <circle className='figure2'/>
    <circle className='figure3'/>
    </div>
  )
}
