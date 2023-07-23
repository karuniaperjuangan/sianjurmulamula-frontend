
//import './App.css'
import HtmlHeader from '../components/HtmlHead'
import BerandaSipitudai from '../components/ProfilSipitudai/1Beranda'
import LetakSipitudai from '../components/ProfilSipitudai/2LetakSipitudai'
import LokasiPentingSipitudai from '../components/ProfilSipitudai/3LokasiPenting'
import DaftarArtikelSipitudai from '../components/ProfilSipitudai/4ArtikelSipitudai'

export default function ProfilSipitudai() {

  return (
    <div id="home">
      <HtmlHeader title='Profil Desa Aek SIpitudai' description='Desa Aek Sipitudai adalah salah satu desa yang ada di Sianjur Mula-Mula. Arti dari nama desa ini adalah “Air 7 Rasa” karena di desa ini terdapat sumber air yang dipercaya memiliki tujuh rasa yang berbeda-beda. Mayoritas masyarakat yang tinggal di desa ini adalah masyarakat Batak Toba rumpun Limbong yang bekerja di bidang pertanian.'/>
      <BerandaSipitudai/>
      <LetakSipitudai/>
      <LokasiPentingSipitudai/>
      <DaftarArtikelSipitudai/>
    </div>
  )
}

