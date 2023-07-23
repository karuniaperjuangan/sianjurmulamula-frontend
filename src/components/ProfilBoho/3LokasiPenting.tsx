import Slider from "react-slick";
import AOS from "aos";
import KantorDesa from "../../assets/Boho/KantorDesa.jpg";
import HKBPBoho from "../../assets/Boho/HKBPBoho.jpg";
import HKBPPeabang from "../../assets/Boho/HKBPPeabang.jpg";
import GerejaKatolik from "../../assets/Boho/Katolik.jpg";
import MakamAdat from "../../assets/Boho/MakamAdat.jpg";
import SD1Boho from "../../assets/Boho/SD1Boho.jpg";
import SD16Boho from "../../assets/Boho/SD16Boho.jpg";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Kantor Desa Boho",
    image: KantorDesa,
    url: "https://goo.gl/maps/9r9YJG474DThcABj9",
  },
  {
    name: "Gereja HKBP Boho",
    image: HKBPBoho,
    url: "https://goo.gl/maps/dSS7hvqyFZiiQgze9",
  },
  {
    name: "Gereja HKBP Peabang",
    image: HKBPPeabang,
    url: "https://goo.gl/maps/1TPsrxsSQTLWw8RE8",
  },
  {
    name: "Gereja Katolik St. Yosep Stasi Boho",
    image: GerejaKatolik,
    url: "https://goo.gl/maps/heuy5VGUq81SaPWz9",
  },
  {
    name: "Makam Adat Boho",
    image: MakamAdat,
    url: "https://goo.gl/maps/sGdXguLuWwNfTC5U9",
  },
  {
    name: "SD 1 Boho",
    image: SD1Boho,
    url: "https://goo.gl/maps/Eq3T3gNmJ7tuKkvC6",
  },
  {
    name: "SD 16 Boho (Peabang)",
    image: SD16Boho,
    url: "https://goo.gl/maps/yTAqkb1Jo1PJQ1X3A",
  }
]
const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  export default function LokasiPentingBoho(){
    AOS.init();
    AOS.refresh();

    return(
        <div className='w-screen bg-smm-black p-[5%]'>
        <h1 className=' h-1/5 text-3xl sm:text-6xl smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'
        data-aos="fade-down"
        data-aos-duration="1000"
        >Lokasi Penting</h1>
        <div className="h-full my-8">
          <Slider {...sliderSettings}>
            {locations.map((item, _) => {
                return(
                    <Link to={item.url} target="_blank" rel="noopener noreferrer" className="px-4 relative hover:scale-105 transition-all">
              <img className="rounded-2xl w-full cursor-pointer brightness-50 aspect-square object-cover" src={item.image} alt="rectangle"></img>
              <p className="absolute bottom-0 text-center text-xl text-white left-0 right-0 font-made-sunflower my-6">{item.name}</p>
            </Link>
                )
            })}
          </Slider>
        </div>
      </div>
    )
}