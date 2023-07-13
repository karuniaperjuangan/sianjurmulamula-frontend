import { Link } from "react-router-dom";
import BG from '../assets/BG.jpg'
export default function KatalogArtikel() {
    return (
      <>
      <div className="min-h-screen w-screen flex flex-col py-14 bg-white">
      <h1 className="smm-title font-made-sunflower">Ensiklopedia</h1>
      <div className="w-4/5 max-w-4xl mx-auto">
      <h2 className=" text-smm-pink">Budaya</h2>
      <div className="md:grid md:grid-cols-4">
        {
            [1,2,3,4,5,6].map((item, index) => {
                return(
                    <Link to={`/artikel/${item}`} className="text-2x mx-4 font-made-sunflower text-smm-pink text-center">
                        <img src={BG} className="aspect-square w-full"/>
                        <h2 className=" font-montserrat text-black text-2xl font-bold text-left">Artikel </h2>
                    </Link>
                )
            })
        }
      </div>  
      </div>  
      </div>
      </>
    );
  }