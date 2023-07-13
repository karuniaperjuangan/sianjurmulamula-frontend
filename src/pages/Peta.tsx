import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Logo from '../assets/Logo.png';

export default function Peta() {
    return (
        <div className="min-h-screen w-screen bg-smm-black py-14">
            <h1 className="smm-title font-made-sunflower">Peta</h1>
            <MapContainer center={[2.600370, 98.651588]} zoom={13} scrollWheelZoom={true} className="w-4/5 max-w-4xl aspect-video mx-auto z-10">
                <TileLayer
                    attribution='&copy; Data diambil dari OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[2.573764409807795, 98.6613853906447]}>
                    <Popup>
                        <p>Sianjur Mula-Mula</p>
                        <img src={Logo} alt="Logo" />
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}