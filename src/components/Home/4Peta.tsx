import { Link } from "react-router-dom"
import Peta1MasterPlan from "../../assets/Home/Peta1MasterPlan.png"
import Peta2MataAir from "../../assets/Home/Peta2MataAir.png"
import Peta3MitigasiBencana from "../../assets/Home/Peta3MitigasiBencana.png"
import AOS from "aos";
import "aos/dist/aos.css";

export default function PetaBeranda(){


    return(
        <div className='min-h-screen bg-white p-[5%] flex flex-col'>
        <h1 className='text-3xl sm:text-6xl h-1/5 smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'
        data-aos="fade-down"
        data-aos-duration="1000"
        >Peta Sianjur Mula-Mula</h1>
        <div className='flex flex-col my-auto md:grid md:grid-cols-3 px-[10%] md:px-0 max-w-4xl w-full items-center align-middle mx-auto justify-around h-full'
        data-aos="fade-up"
        data-aos-duration="1000"
        >
          <Link to="/peta" className='h-1/4 md:h-full mx-6 hover:scale-105 my-2 transition-all'>
            <img
              id='peta-1'
              src={Peta1MasterPlan} className='h-full'></img>
          </Link>
          <Link to="/peta" className='h-1/4 md:h-full mx-6 hover:scale-105 my-2 transition-all'>
            <img
              id='peta-2'
              src={Peta2MataAir} className='h-full'></img>
          </Link>
          <Link to="/peta" className='h-1/4 md:h-full mx-6 hover:scale-105 my-2 transition-all'>
            <img
              id='peta-3'
              src={Peta3MitigasiBencana} className='h-full'></img>
          </Link>

        </div>
      </div>
    )
}