import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMapEvents } from "react-leaflet";
import Logo from '../assets/Logo.png';
import { useEffect, useState } from "react";
import HtmlHeader from "../components/HtmlHead";
import MataAirIcon from '../assets/Peta/MataAir.png';
import { Icon } from "leaflet";
import Pemandian from '../assets/Sipitudai/Pemandian.jpeg';
import { DataMataAirModel } from "../models/models";
import PotensiLongsorIcon from '../assets/Peta/PotensiLongsor.png';
import { useSearchParams } from "react-router-dom";

const mataAirData: Array<DataMataAirModel> = [
    {
        "nama": "Tele",
        "pos": [2.5269683604320248, 98.63344073295595],
        "pH": 7.5,
    },
    {
        "nama": "Aek Sipitudai",
        "pos": [2.5788352774995067, 98.64542484283447],
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
const description = {
    "master-plan-desa": "Desa Boho merupakan desa yang dirancang sebagai desa wisata. Untuk itu, perlu perencanaan matang terkait sarana prasana yang mendukung kegiatan pariwisata. Dalam peta di atas, diberikan informasi mengenai perencanaan sarana pendukung pariwisata desa yang meliputi kafe, dermaga, pelabuhan, dan lain-lain.",
    "kondisi-mata-air": "Desa Boho merupakan desa yang terletak di daerah pegunungan. Oleh karena itu, penduduk setempat sangat mengandalkan titik mata air alami. Dalam peta di atas, disajikan informasi mengenai nilai pH mata air untuk menunjukkan bahwa mata air yang ada di sana aman dikonsumsi.",
    "rawan-bencana": "Sebagai daerah yang terletak di lereng perbukitan, terdapat potensi kemunculan bencana seperti Gempa Bumi dan Longsor. Untuk itu, perlu kesiapsiagaan dari masyarakat setempat. Dalam peta di atas, disajikan informasi mengenai titik rawan bencana yang perlu diwaspadai."
}
export default function Peta() {
    const [searchParams, _] = useSearchParams()
    const [geojson, setGeojson] = useState(null);
    const [currentTabIndex, setCurrentTabIndex] = useState<"master-plan-desa"|"kondisi-mata-air"|"rawan-bencana">(["master-plan-desa","kondisi-mata-air","rawan-bencana"].includes(searchParams.get("mode")??"") ?searchParams.get("mode") as "master-plan-desa"|"kondisi-mata-air"|"rawan-bencana" :"master-plan-desa");
    const handleTabChange = (_: React.SyntheticEvent, mode: "master-plan-desa"|"kondisi-mata-air"|"rawan-bencana") => {
        console.log(mode);
        setCurrentTabIndex(mode);
    };
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

    const ShowCurrentCoordinateDummy = () => {
        useMapEvents({
            click(e) {
                setPosition(e.latlng)
                console.log(position)
            },
        })
        return <div></div>;
    }
    return (
        <div className="min-h-screen w-screen bg-smm-black py-14">
            <HtmlHeader title="Peta" description="Halaman ini menampilkan peta sistem informasi Desa Boho yang merupakan salah satu desa di Sianjur Mula-Mula." />
            <h1 className="smm-title font-made-sunflower py-6">Peta</h1>
            <p className=" text-white w-[90%] max-w-2xl py-6 text-center mx-auto"> Di bawah ini merupakan peta keadaan Sianjur Mula-Mula, khususnya Desa Boho. Klik salah satu mode untuk melihat penjelasan lebih lanjut.</p>
            <MapContainer center={[2.5534,98.6604]} zoom={13} minZoom={13} maxZoom={18} scrollWheelZoom={true} className="w-full md:w-4/5 max-w-4xl aspect-square md:aspect-video mx-auto z-10">
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
                {(currentTabIndex === "kondisi-mata-air") &&mataAirData.map((mataAir, index) => {
                    return (
                        <Marker key={index} position={mataAir.pos} icon={new Icon({ iconUrl: MataAirIcon, iconSize: [40, 40] })}>
                            <Popup className="flex items-center">
                                <h1 className="text-center font-montserrat text-2xl">Mata Air {mataAir.nama}</h1>
                                <img src={Pemandian} alt="Logo" className=" w-24 mx-auto" />
                                <p>Nilai pH {mataAir.pH}</p>
                            </Popup>
                        </Marker>
                    )
                })}
                {(currentTabIndex === "rawan-bencana") &&
                    potensiLongsorData.map((potensiLongsor, index) => {
                        return (
                            <Marker key={index} position={[potensiLongsor.Lat, potensiLongsor.Long]} icon={new Icon({ iconUrl: PotensiLongsorIcon, iconSize: [20, 20] })}>
                                <Popup className="flex items-center">
                                    <p className="text-center font-montserrat text-lg">Titik Siaga Longsor</p>
                                </Popup>
                            </Marker>
                        )
                    }
                    )}
                {/* import from /KecamatanSMM.geojson */
                    geojson && <GeoJSON pathOptions={{ color: 'red', opacity: 0.3, weight: 3, fill: false }} data={geojson} />
                }
                <ShowCurrentCoordinateDummy />
            </MapContainer>
            <p className="mx-auto text-center">[{[position.lat, position.lng].toString()}]</p>

            <div className="mx-auto max-w-2xl px-4">

                {/* A row that contain 3 button as tab */}
                <div className="bg-white rounded-md my-6 overflow-hidden h-18 flex align-middle">
                    <button className={`h-full w-1/3 rounded-none transition-all my-auto py-2 ${currentTabIndex === "master-plan-desa" ? "bg-smm-red text-white" : "bg-white text-smm-black"} font-montserrat font-bold text-lg`} onClick={(e) => handleTabChange(e, "master-plan-desa")}>Master Plan</button>
                    <button className={`h-full w-1/3 rounded-none transition-all my-auto py-2 ${currentTabIndex === "kondisi-mata-air" ? "bg-smm-red text-white" : "bg-white text-smm-black"} font-montserrat font-bold text-lg`} onClick={(e) => handleTabChange(e, "kondisi-mata-air")}>Keadaan Mata Air</button>
                    <button className={`h-full w-1/3 rounded-none transition-all my-auto py-2 ${currentTabIndex === "rawan-bencana" ? "bg-smm-red text-white" : "bg-white text-smm-black"} font-montserrat font-bold text-lg`} onClick={(e) => handleTabChange(e, "rawan-bencana")}>Mitigasi Bencana</button>
                </div>
            
            <p className=" text-justify text-white">{description[currentTabIndex]}</p>
            </div>
        </div>
    );
}