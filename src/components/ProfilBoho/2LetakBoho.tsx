import AOS from "aos";
import "aos/dist/aos.css";

export default function LetakBoho(){
    AOS.init();
    AOS.refresh();

    return(
        <div className='min-h-screen bg-white p-[5%] flex flex-col'>
        <h1 className='text-3xl sm:text-6xl h-1/5 smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'
        data-aos="fade-down"
        data-aos-duration="1000"
        >Letak Desa Boho</h1>

        <div className="md:grid md:grid-cols-2 h-full flex flex-col my-auto">
          <div className="flex flex-col justify-center items-center h-full order-2 md:order-1 m-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          >
            <p className="text-black text-center md:text-xl font-montserrat">Desa Boho terletak di bagian tenggara Kecamatan Sianjur Mula-Mula, Kabupaten Samosir. Desa ini berbatasan langsung dengan Kecamatan Harian dan Kecamatan Pangururan. Desa ini juga terletak di tepi luar Danau Toba sehingga beberapa titik yang ada di desa ini bisa dimanfaatkan untuk menikmati keindahan Danau Toba.</p>
          </div>
          <iframe className=" w-3/4 aspect-video order-1 md:order-2 mx-auto my-auto"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34249.54597280284!2d98.63514555558093!3d2.5707434071988255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031daa19b1bfcd5%3A0xdbd1ed3e93c2f7f9!2sBoho%2C%20Sianjur%20Mula%20Mula%2C%20Samosir%20Regency%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1689672141806!5m2!1sen!2sid"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      title="map_boho"
                      data-aos="fade-up"
                      data-aos-duration="1000"
          />
        </div>

      </div>
    )
}