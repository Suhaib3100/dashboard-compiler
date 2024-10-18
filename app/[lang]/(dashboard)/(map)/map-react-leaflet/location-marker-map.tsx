"use client"
import { useState } from "react"
import Leaflet from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"

Leaflet.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})

function LocationMarker() {
    const [position, setPosition] = useState<Leaflet.LatLng | null>(null)


    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

interface MapState {
    lat: number;
    lng: number;
    zoom: number;
}

const LocationMarkerMap = ({ height = 350 }: { height?: number }) => {
    const [state, setState] = useState<MapState>({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    })
    const position: [number, number] = [state.lat, state.lng]

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
            <LocationMarker />
        </MapContainer>
    )

}

export default LocationMarkerMap;