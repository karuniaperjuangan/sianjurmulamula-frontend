import { Link } from 'react-router-dom'
import ProfilSipitudaiLarge from "../../assets/Home/ProfilSipitudai-Large.png"
import ProfilBohoLarge from "../../assets/Home/ProfilBoho-Large.png"

import ProfilSipitudaiSmall from "../../assets/Home/ProfilSipitudai-Small.png"
import ProfilBohoSmall from "../../assets/Home/ProfilBoho-Small.png"
import { useEffect } from 'react'

export default function ProfilBeranda(){

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
        <div className='h-screen bg-white p-[5%]'>
        <h1 className='text-3xl sm:text-6xl smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'>Profil Desa Wisata</h1>
        <div className='flex flex-col px-[20%] md:px-0 max-w-2xl items-center align-middle mx-auto justify-around h-4/5'>
          <Link to="/desaaeksipitudai">
            <img
              id='profil-sipitudai'
              src={
                window.innerWidth > 1024 ? ProfilSipitudaiLarge : ProfilSipitudaiSmall
              } className='w-full hover:scale-105 my-2 transition-all'></img>
          </Link>
          <Link to="/desaboho">
            <img
              id='profil-boho'
              src={
                window.innerWidth > 1024 ? ProfilBohoLarge : ProfilBohoSmall
              } className='w-full hover:scale-105 my-2 transition-all'></img>
          </Link>
        </div>
      </div>
    )
}