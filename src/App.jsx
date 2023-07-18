import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './Components/Registration/Registration'
import Navbar from './Components/Navbar/Navbar'

function App() {
  
  return (
    <>
       <Navbar></Navbar> 
     <Registration></Registration>
    </>
  )
}

export default App
