import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VMap from "./vectore-map";
import EventVMap from "./events-map";
import SelectingLayers from "./selecting-layers";
import LayerLinks from "./layer-links";
import StyledVMap from "./styled-map";

const MapsVectorPage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Vector Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <VMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Simple Events</CardTitle>
                </CardHeader>
                <CardContent>
                    <EventVMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Selecting Layers</CardTitle>
                </CardHeader>
                <CardContent>
                    <SelectingLayers />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Layer links</CardTitle>
                </CardHeader>
                <CardContent>
                    <LayerLinks />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Styled Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <StyledVMap />
                </CardContent>
            </Card>
        </div>
    );
};

export default MapsVectorPage;