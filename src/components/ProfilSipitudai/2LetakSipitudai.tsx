import AOS from "aos";
import "aos/dist/aos.css";

export default function LetakSipitudai(){
    AOS.init();
    AOS.refresh();

    return(
        <div className='min-h-screen bg-white p-[5%] flex flex-col'>
        <h1 className='text-3xl sm:text-6xl h-1/5 smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'
        data-aos="fade-down"
        data-aos-duration="1000"
        >Letak Desa Aek Sipitudai</h1>

<div className="md:grid md:grid-cols-2 h-full flex flex-col my-auto">
          <div className="flex flex-col justify-center items-center h-full order-2 md:order-1 m-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          >
            <p className="text-black text-center md:text-xl font-montserrat">Desa Aek Sipitudai terletak di  Kecamatan Sianjur Mula-Mula, Kabupaten Samosir. Desa Aek Sipitudai berbatasan langsung dengan Desa Boho dan Desa Sarrimarihit. Desa ini merupakan salah satu daerah yang akan dilewati ketika ingin menuju Pusuk Buhit.</p>
          </div>
          <iframe className=" w-3/4 aspect-video order-1 md:order-2 mx-auto my-auto"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.199176111611!2d98.63123273538095!3d2.571762958502048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031d014f0ad333d%3A0xa4a9ab52b443ab75!2sAek%20Sipitudai%2C%20Sianjur%20Mula%20Mula%2C%20Samosir%20Regency%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1689672446646!5m2!1sen!2sid"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      title="map_sipitudai"
                      data-aos="fade-up"
                      data-aos-duration="1000"
          />
        </div>

      </div>
    )
}