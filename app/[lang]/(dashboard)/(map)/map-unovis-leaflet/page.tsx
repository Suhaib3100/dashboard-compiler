import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicMap from "./basic-map";
import MapWithData from "./map-with-data";
import MapPointsColor from "./map-points-color";
import MapPointRadius from "./mappoint-radius";
import MapClusterColor from "./map-cluster-color";
import BasicLeafletMap from "./basic-leaflet-map";
import MapClusterExpand from "./cluster-expand";
import MapPointTraingleShape from "./map-points-traingle";
import MapPointCircleShape from "./mappoint-circleshape";
import MapPointSquareShape from "./mappoint-squareshape";
import MapPointRingShape from "./mappoint-ringshape";

const MapUnovisLeafletPage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 ">
      <Card>
        <CardHeader>
          <CardTitle>Basic Leaflet Map</CardTitle>
        </CardHeader>
        <CardContent>
          <BasicLeafletMap />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Basic Map</CardTitle>
        </CardHeader>
        <CardContent>
          <BasicMap />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Data</CardTitle>
        </CardHeader>
        <CardContent>
          <MapWithData />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Points Color</CardTitle>
        </CardHeader>
        <CardContent>
          <MapPointsColor />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Point Shape - Traingle </CardTitle>
        </CardHeader>
        <CardContent>
          <MapPointTraingleShape />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Point Shape - Square </CardTitle>
        </CardHeader>
        <CardContent>
          <MapPointSquareShape />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Point Shape - Circle </CardTitle>
        </CardHeader>
        <CardContent>
          <MapPointCircleShape />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Point Shape - Ring </CardTitle>
        </CardHeader>
        <CardContent>
          <MapPointRingShape />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Point Radius </CardTitle>
        </CardHeader>
        <CardContent>
          <MapPointRadius />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Cluster Color and Radius </CardTitle>
        </CardHeader>
        <CardContent>
          <MapClusterColor />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Expand on Click </CardTitle>
        </CardHeader>
        <CardContent>
          <MapClusterExpand />
        </CardContent>
      </Card>

    </div>
  );
};

export default MapUnovisLeafletPage;
