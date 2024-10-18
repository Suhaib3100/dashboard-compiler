"use client"
import { useState } from "react"
import Leaflet from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"
Leaflet.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})

interface MapState {
    lat: number;
    lng: number;
    zoom: number;
}

const PopupMarkerMap = ({ height = 350 }) => {
    const [state, setState] = useState<MapState>({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    })
    const position:[number, number] = [state.lat, state.lng]

    return (
        <MapContainer
            center={position}
            zoom={state.zoom}
            style={{ height: height }}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <span className="text-gray-900 text-lg font-medium">Hello DashTail!</span>
                </Popup>
            </Marker>
        </MapContainer>
    )

}

export default PopupMarkerMap;