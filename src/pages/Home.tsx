
//import './App.css'
import Beranda from '../components/Home/1Beranda'
import ProfilBeranda from '../components/Home/2ProfilDesa'
import PetaBeranda from '../components/Home/4Peta'
import BudayaBeranda from '../components/Home/3BudayaLokal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {

  

  return (
    <>
      <Beranda/>
      <ProfilBeranda/>
      <BudayaBeranda/>
      <PetaBeranda/>
      <Navbar />
      <Footer/>
    </>
  )
}

export default Home
