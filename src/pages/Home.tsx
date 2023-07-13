
//import './App.css'
import Beranda from '../components/Home/1Beranda'
import ProfilBeranda from '../components/Home/2ProfilDesa'
import PetaBeranda from '../components/Home/4Peta'
import BudayaBeranda from '../components/Home/3BudayaLokal'

function Home() {

  return (
    <div id="home">
      <Beranda/>
      <ProfilBeranda/>
      <BudayaBeranda/>
      <PetaBeranda/>
    </div>
  )
}

export default Home
