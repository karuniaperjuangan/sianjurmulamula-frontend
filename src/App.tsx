import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './components/Navbar'
import BackgroundImage from './assets/BG.jpg'
function App() {


  return (
    <>
    <div className='h-screen relative flex justify-center'>
       <img src={BackgroundImage} className='w-full object-cover'></img>
       <h1 className='absolute text-2xl sm:text-6xl smm-title my-auto mx-auto top-1/2 font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'>Sianjur Mula-Mula</h1>
    </div>
   
    <div className='w-screen font-made-sunflower h-[5000px]'>

      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>   
    </div>
    <Navbar/>
    </>
  )
}

export default App
