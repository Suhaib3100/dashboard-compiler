
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CenterPositioningScale from "./center-positioning";
import GridConfigure from "./grid-configure";
import TickConfiguration from "./tick-configuration";
import TitleConfiguration from "./title-configuration";


const ChartsChartJsScaleOptions = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Center Positioning</CardTitle>
                </CardHeader>
                <CardContent>
                    <CenterPositioningScale />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Grid Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                    <GridConfigure />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Tick Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                    <TickConfiguration />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Title Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                    <TitleConfiguration />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsScaleOptions;
