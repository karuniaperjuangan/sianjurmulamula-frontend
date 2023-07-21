import Slider from "react-slick";
import AOS from "aos";
import BackgroundImage from '../../assets/BGBoho.jpg'
 
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <div className="h-full py-8">
          <Slider {...sliderSettings}>
            {[1,2,3,4,5].map((item, _) => {
                return(
                    <div className="px-4 relative">
              <img className="rounded-2xl hover:scale-105 cursor-pointer transition-all brightness-50" src={BackgroundImage} alt="rectangle"></img>
              <p className="absolute bottom-0 text-center left-0 right-0 font-made-sunflower my-6">Desa Boho</p>
            </div>
                )
            })}
          </Slider>
        </div>
      </div>
    )
}