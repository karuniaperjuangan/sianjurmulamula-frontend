import Slider from "react-slick";
import AOS from "aos";
import Pemandian from "../../assets/Sipitudai/Pemandian.jpeg";
import HKBPSosormangka from "../../assets/Sipitudai/HKBPSosormangka.jpg";
import PuskesmasLimbong from "../../assets/Sipitudai/PuskesmasLimbong.jpg";
import SD14Sipitudai from "../../assets/Sipitudai/SD14Sipitudai.png";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Pemandian Aek Sipitudai",
    image: Pemandian,
    url: "https://goo.gl/maps/YNnYFJWAcY8gFMkY8",
  },
  {
    name: "Gereja HKBP Sosormangka",
    image: HKBPSosormangka,
    url: "https://goo.gl/maps/Y8CkbazPBJtfYrsf7",
  },
  {
    name: "Puskesmas Limbong",
    image: PuskesmasLimbong,
    url: "https://goo.gl/maps/dwzKX8ih9UVxyg388",
  },
  {
    name: "SDN 14 Aek Sipitudai",
    image: SD14Sipitudai,
    url: "https://goo.gl/maps/nnx51wUdjvsDGQ5p8",
  }
]
const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 4,
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

  export default function LokasiPentingSipitudai(){
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
              <img className="rounded-2xl cursor-pointer brightness-50 w-full aspect-square object-cover" src={item.image} alt="rectangle"></img>
              <p className="absolute bottom-0 text-center text-xl text-white left-0 right-0 font-made-sunflower my-6">{item.name}</p>
            </Link>
                )
            })}
          </Slider>
        </div>
      </div>
    )
}