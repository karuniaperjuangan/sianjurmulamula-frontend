import { Link } from "react-router-dom";
import HtmlHeader from "../components/HtmlHead";
export default function NotFound() {
  return (
    
    <>
    <HtmlHeader title="Halaman Tidak Ditemukan" description="Halaman Tidak Ditemukan"/>
    <div className="h-screen w-screen flex justify-center items-center flex-col p-6 bg-smm-black">
      <h1 className="text-4xl font-made-sunflower text-smm-white my-4 text-center">404 | Halaman tidak ditemukan</h1>
      <Link to="/" className="text-2xl font-made-sunflower text-smm-pink text-center">Kembali ke halaman utama</Link>
    </div>
    </>
  );
}