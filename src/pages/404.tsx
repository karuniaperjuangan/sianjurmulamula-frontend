import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-smm-black">
      <h1 className="text-4xl font-made-sunflower text-smm-white my-4">404 | Halaman tidak ditemukan</h1>
      <Link to="/" className="text-2xl font-made-sunflower text-smm-pink">Kembali ke halaman utama</Link>
    </div>
    <Navbar />
    <Footer/>
    </>
  );
}