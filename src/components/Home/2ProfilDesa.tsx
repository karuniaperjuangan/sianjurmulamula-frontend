import { Link } from 'react-router-dom'
import ProfilSipitudaiLarge from "../../assets/Home/ProfilSipitudai-Large.png"
import ProfilBohoLarge from "../../assets/Home/ProfilBoho-Large.png"

import ProfilSipitudaiSmall from "../../assets/Home/ProfilSipitudai-Small.png"
import ProfilBohoSmall from "../../assets/Home/ProfilBoho-Small.png"
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProfilBeranda(){
    AOS.init();
    AOS.refresh();
  

    const onResize = () => {
        //if width > 640px
        if (window.innerWidth > 630) {
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
        <h1 className='h-1/6 text-3xl sm:text-6xl smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'
        data-aos="fade-down"
        data-aos-duration="1000"
        >Profil Desa Wisata</h1>
        <div className='flex flex-col px-[20%] sm:px-0 max-w-2xl items-center align-middle mx-auto justify-around h-4/5'>
          <Link to="/profil-aek-sipitudai" className='hover:scale-105 transition-all'>
            <img
              id='profil-sipitudai'
              src={
                window.innerWidth > 630 ? ProfilSipitudaiLarge : ProfilSipitudaiSmall
              } className='w-full my-2 '
              data-aos="fade-right"
              data-aos-duration="1000"
              ></img>
          </Link>
          <Link to="/profil-boho" className='hover:scale-105 transition-all'>
            <img
              id='profil-boho'
              src={
                window.innerWidth > 630 ? ProfilBohoLarge : ProfilBohoSmall
              } className='w-full my-2'
              data-aos="fade-left"
              data-aos-duration="1000"
              ></img>
          </Link>
        </div>
      </div>
    )
}