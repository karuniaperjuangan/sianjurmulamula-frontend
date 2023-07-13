import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import Logo from '../assets/Logo.png';
import { useEffect, useState } from "react";


export default function Peta() {
    const [geojson, setGeojson] = useState(null);
    //Load geojson
    let path = "/KecamatanSMM.geojson"
    useEffect(() => {
        async function fetchGeoJson() {
            const response = await fetch(path);
            const geojson_data = await response.json();
            console.log(geojson_data)
            setGeojson(geojson_data);
        }
        fetchGeoJson();
    }, [path]);

    
    return (
        <div className="min-h-screen w-screen bg-smm-black py-14">
            <h1 className="smm-title font-made-sunflower py-6">Peta</h1>
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
                {/* import from /KecamatanSMM.geojson */
                geojson && <GeoJSON pathOptions={{ color: 'red', opacity:0.3, weight:3, fill:false }} data={geojson} />
}
            </MapContainer>
        </div>
    );
}