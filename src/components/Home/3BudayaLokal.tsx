
import { Link } from 'react-router-dom'
import BudayaLokalImage from '../../assets/Home/BudayaLokal.png'
export default function BudayaBeranda(){
    return(
        <div className='min-h-screen bg-smm-black p-[5%]'>
        <h1 className=' h-1/5 text-3xl sm:text-6xl smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'>Budaya Lokal</h1>
        <div className="md:grid md:grid-cols-2 h-full flex flex-col">
          <div className="flex flex-col justify-center items-center h-full order-2 md:order-1 m-6">
            <p className="text-white text-center md:text-xl font-montserrat">Sianjur Mula-Mula dipercaya sebagai tempat turunnya sang leluhur suku Batak, yaitu Siraja Batak.
            Oleh karena itu, berbagai adat dan budaya Batak yang unik dan beragam dapat dengan mudah dijumpai di sini. Contoh dari budaya tersebut adalah Rumah Bolon, Gorga, dan Ulos.</p>
            <Link to="/artikel" className="text-xl md:text-2xl font-made-sunflower text-smm-pink text-center hover:scale-105 transition-all py-4">Cari tahu selengkapnya...</Link>
          </div>
          <img className="w-1/2 mx-auto order-1 md:order-2 m-6" src={BudayaLokalImage} alt="Budaya Lokal"/>
        </div>
      </div>
    )
}