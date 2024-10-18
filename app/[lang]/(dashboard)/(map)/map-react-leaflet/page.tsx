import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GeoJSONMap from "./geo-json";
import BasicMap from "./basic-map";
import PopupMarkerMap from "./popup-marker-map";
import LocationMarkerMap from "./location-marker-map";
import VectorLayersMap from "./vector-layers";
import LayerGroupMap from "./layer-groups";
import SVGMap from "./svg-map";
import "leaflet/dist/leaflet.css"
const MapReactLeaflet = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Leaflet Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Popup with Marker</CardTitle>
                </CardHeader>
                <CardContent>
                    <PopupMarkerMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Location Marker Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <LocationMarkerMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Vector Layers Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <VectorLayersMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Layer Groups and Layers Control</CardTitle>
                </CardHeader>
                <CardContent>
                    <LayerGroupMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>SVG Overlay</CardTitle>
                </CardHeader>
                <CardContent>
                    <SVGMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Gio JSON  Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <GeoJSONMap />
                </CardContent>
            </Card>
        </div>
    );
};

export default MapReactLeaflet;
