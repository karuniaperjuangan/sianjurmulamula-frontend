
//import './App.css'
import Navbar from '../components/Navbar'
import BackgroundImage from '../assets/BG.jpg'
import { Link } from 'react-router-dom'
import ProfilSipitudaiLarge from "../assets/Home/ProfilSipitudai-Large.png"
import ProfilBohoLarge from "../assets/Home/ProfilBoho-Large.png"

import ProfilSipitudaiSmall from "../assets/Home/ProfilSipitudai-Small.png"
import ProfilBohoSmall from "../assets/Home/ProfilBoho-Small.png"
import { useEffect } from 'react'

function Home() {

  const onResize = () => {
    //if width > 640px
    if (window.innerWidth > 768) {
      //change image to large
      document.getElementById('profil-sipitudai')?.setAttribute('src', ProfilSipitudaiLarge)
      document.getElementById('profil-boho')?.setAttribute('src', ProfilBohoLarge)
    } else {
      //change image to small
      document.getElementById('profil-sipitudai')?.setAttribute('src', ProfilSipitudaiSmall)
      document.getElementById('profil-boho')?.setAttribute('src', ProfilBohoSmall)
    }
  }

  useEffect(() => {
    //when resize
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  })

  return (
    <>
      <div className='h-screen relative flex justify-center'>
        <img src={BackgroundImage} className='w-full object-cover brightness-50'></img>
        <div className='absolute top-1/3 md:top-1/2 my-auto mx-auto'>
        <h1 className='text-3xl sm:text-6xl smm-title top-1/2 font-made-sunflower text-smm-red stroke-white hover:scale-105 transition-all'>Sianjur Mula-Mula</h1>
        <p className='font-montserrat max-w-2xl w-4/5 mx-auto py-4 text-center hover:scale-105 transition-all'>Sianjur Mula-mula adalah sebuah kecamatan yang berada di Kabupaten Samosir, provinsi Sumatera Utara, Indonesia. Ibu kota kecamatan ini berada di desa Ginolat. Sianjur Mulamula terletak di jalan utama yang menghubungi Doloksanggul dan Sidikalang.</p>
        </div>
      </div>

      <div className='h-screen bg-white p-[5%]'>
        <h1 className='text-3xl sm:text-6xl smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'>Profil Desa Wisata</h1>
        <div className='flex flex-col px-[20%] md:px-0 max-w-2xl items-center align-middle mx-auto justify-around h-4/5'>
          <Link to="/desaaeksipitudai">
            <img
              id='profil-sipitudai'
              src={
                window.innerWidth > 1024 ? ProfilSipitudaiLarge : ProfilSipitudaiSmall
              } className='w-full hover:scale-105 py-2 transition-all'></img>
          </Link>
          <Link to="/desaboho">
            <img
              id='profil-boho'
              src={
                window.innerWidth > 1024 ? ProfilBohoLarge : ProfilBohoSmall
              } className='w-full hover:scale-105 py-2 transition-all'></img>
          </Link>
        </div>
      </div>

      <div className='h-screen bg-smm-black p-[5%]'>
        <h1 className='text-3xl sm:text-6xl smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'>Budaya Lokal</h1>
      </div>

      <div className='h-screen bg-white p-[5%]'>
        <h1 className='text-3xl sm:text-6xl smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'>Peta Sianjur Mula-Mula</h1>
      </div>

      <Navbar />
    </>
  )
}

export default Home
