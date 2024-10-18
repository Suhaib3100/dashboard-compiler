import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdvancedLeafletMap from "./advance-leaflet-map";
import ChoroplethWorldMap from "./choropleth-world-map";

const MapUnovisAdvancePage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 ">
      <Card>
        <CardHeader>
          <CardTitle>Advanced Leaflet Map</CardTitle>
        </CardHeader>
        <CardContent>
          <AdvancedLeafletMap />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Choropleth World Map with Custom Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <ChoroplethWorldMap />
        </CardContent>
      </Card>
    </div>
  );
};

export default MapUnovisAdvancePage;
