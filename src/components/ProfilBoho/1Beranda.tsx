import BackgroundImage from '../../assets/BGBoho.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

export default function BerandaBoho() {
    AOS.init();
    AOS.refresh();
    
    return (
        <div className='h-screen relative flex justify-center'>
        <img src={BackgroundImage} className='w-full object-cover brightness-50'></img>
        <div className='absolute top-1/2 -translate-y-1/2 my-auto mx-auto'>
        <div
        data-aos="fade-down"
        data-aos-duration="1000">
        <h1 className='text-3xl sm:text-6xl smm-title top-1/2 font-made-sunflower text-smm-red stroke-white hover:scale-105 transition-all'>Desa Boho</h1>
        <p className='font-montserrat max-w-2xl w-4/5 mx-auto py-4 text-center hover:scale-105 transition-all text-white'>Desa Boho adalah salah satu desa yang ada di Sianjur Mula-Mula. “Boho” sendiri bermakna memuaskan atau mengena. Desa ini ditinggali oleh masyarakat Batak dengan rumpun marga Limbong yang umumnya bekerja di bidang pertanian. Tempat wisata yang bisa dikunjungi antara lain Bukit Sijukjuk dan Bukit Bona-bona.</p>
        </div>
        </div>
      </div>
    )
}