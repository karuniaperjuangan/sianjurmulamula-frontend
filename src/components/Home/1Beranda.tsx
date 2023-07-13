import BackgroundImage from '../../assets/BG.jpg'

export default function Beranda() {
    return (
        <div className='h-screen relative flex justify-center'>
        <img src={BackgroundImage} className='w-full object-cover brightness-50'></img>
        <div className='absolute top-1/3 md:top-1/2 my-auto mx-auto'>
        <h1 className='text-3xl sm:text-6xl smm-title top-1/2 font-made-sunflower text-smm-red stroke-white hover:scale-105 transition-all'>Sianjur Mulamula</h1>
        <p className='font-montserrat max-w-2xl w-4/5 mx-auto py-4 text-center hover:scale-105 transition-all'>Sianjur Mulamula adalah sebuah kecamatan yang berada di Kabupaten Samosir, provinsi Sumatera Utara, Indonesia. Ibu kota kecamatan ini berada di desa Ginolat. Sianjur Mulamula terletak di jalan utama yang menghubungi Doloksanggul dan Sidikalang.</p>
        </div>
      </div>
    )
}