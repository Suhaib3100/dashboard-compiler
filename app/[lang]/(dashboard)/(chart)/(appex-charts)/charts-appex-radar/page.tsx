import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicRadar from "./basic-radar";
import MultipleSeriesRadar from "./multiple-series-radar";
import RadarPolygonFill from "./radar-polygon-fill";

const RadarChartPage = () => {
    return (
        <div className="grid grid-cols-2  gap-6 ">
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Radar Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BasicRadar />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Radar Chart - Multiple series</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <MultipleSeriesRadar />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Radar with Polygon-fill</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadarPolygonFill />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default RadarChartPage;
