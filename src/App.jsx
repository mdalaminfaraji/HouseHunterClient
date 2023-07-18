import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './Components/Registration/Registration'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
       <Navbar></Navbar> 
        <Outlet></Outlet>
    </>
  )
}

export default App
