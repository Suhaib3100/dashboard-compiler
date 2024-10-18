import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeafletFlowMap from "./leaflet-flow-map";
import ParticleColorMap from "./particle-colors";
import ParticleRadiusMap from "./particle-radius-map";
import ParticleSpeedMap from "./particle-speed";
import ParticleDensityMap from "./flow-particle-density";

const MapUnovisFlowPage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 ">
      <Card>
        <CardHeader>
          <CardTitle>Basic Leaflet Map</CardTitle>
        </CardHeader>
        <CardContent>
          <LeafletFlowMap />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Particles Color</CardTitle>
        </CardHeader>
        <CardContent>
          <ParticleColorMap />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Particles Radius</CardTitle>
        </CardHeader>
        <CardContent>
          <ParticleRadiusMap />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Particles Speed</CardTitle>
        </CardHeader>
        <CardContent>
          <ParticleSpeedMap />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Particles Density</CardTitle>
        </CardHeader>
        <CardContent>
          <ParticleDensityMap />
        </CardContent>
      </Card>
    </div>
  );
};

export default MapUnovisFlowPage;
