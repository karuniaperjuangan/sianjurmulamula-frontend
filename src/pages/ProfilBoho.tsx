
//import './App.css'
import HtmlHeader from '../components/HtmlHead'
import BerandaBoho from '../components/ProfilBoho/1Beranda'
import LetakBoho from '../components/ProfilBoho/2LetakBoho'
import LokasiPentingBoho from '../components/ProfilBoho/3LokasiPenting'

export default function ProfilBoho() {

  return (
    <div id="home">
      <HtmlHeader title="Profil Desa Boho" description='Desa Boho adalah salah satu desa yang ada di Sianjur Mula-Mula. “Boho” sendiri bermakna memuaskan atau mengena. Desa ini ditinggali oleh masyarakat Batak dengan rumpun marga Limbong yang umumnya bekerja di bidang pertanian. Tempat wisata yang bisa dikunjungi antara lain Bukit Sijukjuk dan Bukit Bona-bona.'/>
      <BerandaBoho/>
      <LetakBoho/>
      <LokasiPentingBoho/>
    </div>
  )
}
