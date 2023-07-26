import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMapEvents } from "react-leaflet";
import Logo from '../assets/Logo.png';
import { useEffect, useState } from "react";
import HtmlHeader from "../components/HtmlHead";
import MataAirLogo from '../assets/Peta/MataAir.png';
import { Icon } from "leaflet";

const mataAirData = [
    {
        "nama": "Tele",
        "pos": [2.600370, 98.651588],
        "pH": 7.5,
    },
    {
        "nama": "Aek Sipitudai",
        "pos": [2.5788352774995067,98.64542484283447],
        "pH": 7,
    },
]
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

    //show current coordinate when clicking map
    const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 })

    const ShowCurrentCoordinateDummy = ()=>{ useMapEvents({
        click(e) {
            setPosition(e.latlng)
            console.log(position)
        },
    })
    return <div></div>;
}
    return (
        <div className="min-h-screen w-screen bg-smm-black py-14">
            <HtmlHeader title="Peta" description="Halaman ini menampilkan peta dari Sianjur Mula-Mula, yang terdiri dari 2 desa yaitu Desa Boho dan Aek Sipitudai." />
            <h1 className="smm-title font-made-sunflower py-6">Peta</h1>
            <MapContainer center={[2.600370, 98.651588]} zoom={13} scrollWheelZoom={true} className="w-4/5 max-w-4xl aspect-video mx-auto z-10">
                <TileLayer
                    attribution='&copy; Data diambil dari OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <p>Sianjur Mula-Mula</p>
                        <img src={Logo} alt="Logo" />
                    </Popup>
                </Marker>
                {mataAirData.map((mataAir, index) => {
                    return (
                        <Marker key={index} position={mataAir.pos} icon={new Icon({iconUrl:MataAirLogo, iconSize:[25,25]})}>
                            <Popup className="flex items-center">
                                <h1 className="text-center font-montserrat text-2xl">Mata Air {mataAir.nama}</h1>
                                <img src={MataAirLogo} alt="Logo" className=" w-24 mx-auto" />
                                <p>Nilai pH {mataAir.pH}</p>
                            </Popup>
                        </Marker>
                    )
                })}
                {/* import from /KecamatanSMM.geojson */
                geojson && <GeoJSON pathOptions={{ color: 'red', opacity:0.3, weight:3, fill:false }} data={geojson} />
}
                <ShowCurrentCoordinateDummy />
            </MapContainer>
            <p className="mx-auto text-center">[{[position.lat,position.lng].toString()}]</p>
        </div>
    );
}