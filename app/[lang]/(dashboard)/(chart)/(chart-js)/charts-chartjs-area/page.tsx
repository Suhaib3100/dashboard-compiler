import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicArea from "./basic-area";
import LineDatasets from "./line-datasets";
import DrawTime from "./draw-time";
import LineChartStacked from "./linechart-stacked";
import RadarStacked from "./radar-stacked";

const ChartsChartJsAreaPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Line Chart Boundaries</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicArea />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Line Chart Datasets</CardTitle>
                </CardHeader>
                <CardContent>
                    <LineDatasets />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Line Chart Draw Time</CardTitle>
                </CardHeader>
                <CardContent>
                    <DrawTime />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Line Chart Stacked</CardTitle>
                </CardHeader>
                <CardContent>
                    <LineChartStacked />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Radar Chart Stacked</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadarStacked />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsAreaPage;
