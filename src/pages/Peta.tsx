import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMapEvents } from "react-leaflet";
import Logo from '../assets/Logo.png';
import { useEffect, useState } from "react";
import HtmlHeader from "../components/HtmlHead";
import MataAirIcon from '../assets/Peta/MataAir.png';
import { Icon } from "leaflet";
import Pemandian from '../assets/Sipitudai/Pemandian.jpeg';
import { DataMataAirModel } from "../models/models";
import PotensiLongsorIcon from '../assets/Peta/PotensiLongsor.png';
const mataAirData:Array<DataMataAirModel> = [
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

const potensiLongsorData = [
    {
        "Lat": 2.5813932644,
        "Long": 98.6774477643
    },
    {
        "Lat": 2.5809136502,
        "Long": 98.6769621191
    },
    {
        "Lat": 2.5790582111,
        "Long": 98.6738141085
    },
    {
        "Lat": 2.5788676571,
        "Long": 98.6716192184
    },
    {
        "Lat": 2.5750382552,
        "Long": 98.6619948884
    },
    {
        "Lat": 2.5752097752,
        "Long": 98.660600523
    },
    {
        "Lat": 2.5756884032,
        "Long": 98.6573979574
    },
    {
        "Lat": 2.5738438582,
        "Long": 98.6612575635
    },
    {
        "Lat": 2.5704979962,
        "Long": 98.6669976286
    },
    {
        "Lat": 2.5706066448,
        "Long": 98.6673214416
    },
    {
        "Lat": 2.5703084706,
        "Long": 98.6687608125
    }
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
                        <Marker key={index} position={mataAir.pos} icon={new Icon({iconUrl:MataAirIcon, iconSize:[40,40]})}>
                            <Popup className="flex items-center">
                                <h1 className="text-center font-montserrat text-2xl">Mata Air {mataAir.nama}</h1>
                                <img src={Pemandian} alt="Logo" className=" w-24 mx-auto" />
                                <p>Nilai pH {mataAir.pH}</p>
                            </Popup>
                        </Marker>
                    )
                })}
                {
                    potensiLongsorData.map((potensiLongsor, index) => {
                        return (
                            <Marker key={index} position={[potensiLongsor.Lat, potensiLongsor.Long]} icon={new Icon({iconUrl:PotensiLongsorIcon, iconSize:[20,20]})}>
                                <Popup className="flex items-center">
                                    <h1 className="text-center font-montserrat text-2xl">Potensi Longsor</h1>
                                </Popup>
                            </Marker>
                        )
                    }
                )}
                {/* import from /KecamatanSMM.geojson */
                geojson && <GeoJSON pathOptions={{ color: 'red', opacity:0.3, weight:3, fill:false }} data={geojson} />
}
                <ShowCurrentCoordinateDummy />
            </MapContainer>
            <p className="mx-auto text-center">[{[position.lat,position.lng].toString()}]</p>
        </div>
    );
}