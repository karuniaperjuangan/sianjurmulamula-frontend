import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import React, { useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';


let item_list = [
  {
    "name": "Profil",
    "link": "/profil",
    sublist: [
      {
        "name": "Desa Boho",
        "link": "/profil/desa-boho"
      },
      {
        "name": "Desa Aek Sipitudai",
        "link": "/profil/desa-aek-sipitudai"
      },
    ]
  },
  {
    "name": "Ensiklopedia",
    "link": "/artikel"
  },
  {
    "name": "Peta",
    "link": "/peta",
    sublist: [
      {
        "name": "Master Plan Desa",
        "link": "/peta?mode=master-plan-desa"
      },
      {
        "name": "Kondisi Mata Air",
        "link": "/peta?mode=kondisi-mata-air"
      },
      {
        "name": "Kawasan Rawan Bencana",
        "link": "/peta?mode=rawan-bencana"
      }]
  },

]

export default function Navbar() {

  const [isSticky, setIsSticky] = React.useState(!!document.getElementById("home"));
  const [isOpened, setIsOpened] = React.useState(false);


  const onScroll = () => {
    if (window.scrollY > 30 || !document.getElementById("home") ) {
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
    <div className={`fixed top-0  inline-block  w-full font-made-sunflower h-14 z-50`}>
      <nav className={` w-full transition z-10 text-white  ${isSticky ? " bg-smm-red shadow-2xl " : "bg-transparent"} `}>
        <div className=" mx-auto w-[90%] h-full flex justify-between items-center">
          <Link to="/" className={` transition-all `} onClick={() => {window.scrollTo({top:0})}}>
            <div className=" transition-all inline-flex align-middle items-center hover:scale-110">

              <img alt='' src={Logo} className='h-10 transition-all'></img>

              <h1 className={` mx-4 text-base lg:text-xl font-extrabold transition-colors text-white`}>Sianjur Mula-Mula</h1>
            </div>
          </Link>

          <ul className='hidden md:inline-flex justify-around list-none items-center h-full'>           {
            item_list.map((item) => {
              return (
                item.sublist ?
                <li>
                  <Menu>
                    <Menu.Button as='a' className={` cursor-pointer px-4 transition-colors h-14 flex text-white ${isSticky ? "hover:bg-black hover:text-white" : " hover:text-black"}`}><li className='my-auto'>{item.name}</li></Menu.Button>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      className='relative'
                    >
                    <Menu.Items as="ul" className=' bg-smm-black absolute p-2 z-10 shadow-md'>
                      {item.sublist.map((subitem) => {
                        return (
                          
                            <Menu.Item as="li">

                                <Link to={subitem.link}
                                  className={` text-white flex rounded-md text-center hover:text-smm-red w-full p-2 text-xs`}>
                                  {subitem.name}
                                </Link>
     
                            </Menu.Item>
                          
                      )})}</Menu.Items>
                </Transition>
                  </Menu></li>

                  :
                  <Link to={item.link} className={` cursor-pointer px-4 transition-colors h-14 flex text-white ${isSticky ? "hover:bg-black hover:text-white" : " hover:text-black"}`}><li className='my-auto'>{item.name}</li></Link>
              )
            })
          }



          </ul>
          <div className='md:hidden hover:scale-110 transition-all h-14 flex align-middle items-center' onClick={() => setIsOpened(!isOpened)}>
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
        <ul className='transition-all bg-smm-red shadow-md fixed right-0 list-none text-white z-10'>
          {item_list.map((item) => {
            return (
              <li className=' p-4 px-8'><Link to={item.link} className='transition-colors text-white hover:bg-black'>{item.name}</Link></li>
            )
          })}
        </ul>
      </div>)
      }
    </div >
  );
}