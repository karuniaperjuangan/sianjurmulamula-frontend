import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import React, { useEffect } from 'react';

let link_list = [
  {
    "name": "Profil",
    "link": "/profil"
  },
  {
    "name": "Ensiklopedia",
    "link": "/webinar"
  },
  {
    "name": "Peta",
    "link": "/peta"
  },
  {
    "name": "KKN-PPM",
    "link": "/peta"
  },
]

export default function Navbar() {

  const [isSticky, setIsSticky] = React.useState(true);
  const [isOpened, setIsOpened] = React.useState(false);

  
  const onScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });



  return (
    <div className={`fixed top-0  inline-block  w-full font-made-sunflower h-16`}>
      <nav className={` top-0 w-full transition z-10 text-white  ${isSticky ? " bg-smm-red shadow-2xl " : " absolute top-0 bg-transparent"} `}>
        <div className=" mx-auto w-[90%] h-full flex justify-between items-center">
          <Link to="/" className={` transition-all ${isSticky?"":"invisible"}`}>
          <div className=" transition-all inline-flex align-middle items-center hover:scale-110">
            
              <img alt='' src={Logo} className='h-10 transition-all'></img>
            
            <h1 className=" m-4 text-base lg:text-xl  font-extrabold transition-colors text-white">Sianjur Mula-Mula</h1>
          </div>
          </Link>

          <ul className='hidden md:inline-flex justify-around list-none items-center h-full'>           {
              link_list.map((link) => {
                return (
                  <Link to={link.link} className={`px-4 transition-colors h-16 flex text-white ${isSticky?"hover:bg-black hover:text-white":" hover:text-black"}`}><li className='my-auto'>{link.name}</li></Link>
                )
              })
            }
           
          </ul>
          <div className='md:hidden hover:scale-110 transition-all' onClick={() => setIsOpened(!isOpened)}>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" width={3} />
            </svg>
          </div>

        </div>
      </nav >
      {isOpened && (<div className=' md:hidden '>
        <ul className='transition-all bg-blue-500 shadow-md fixed right-0 list-none text-white z-10'>
        {link_list.map((link) => {
          return (
            <li className=' p-4 px-8'><Link to={link.link} className='transition-colors text-white hover:bg-black'>{link.name}</Link></li>
          )
        })}
        </ul>
      </div>)
      }
    </div >
  );
}