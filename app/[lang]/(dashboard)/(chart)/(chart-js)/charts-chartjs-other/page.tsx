
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MultiSeriesPieChart from "./multi-series-pie";
import PolarAreaChart from "./polar-area";
import PolarAreaCenteredPointLabel from "./centeredpoint-labels";
import RadarChart from "./radar-chart";
import BubbleChart from "./bubble-chart";
import ComboChart from "./combo-chart";
import DoughnutChart from "./doughnut-chart";
import PieChart from "./pie-chart";
import ScatterChart from "./scatter-chart";


const ChartsChartJsOther = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Bubble Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BubbleChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Combo bar/line</CardTitle>
                </CardHeader>
                <CardContent>
                    <ComboChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Doughnut Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <DoughnutChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Multi Series Pie Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <MultiSeriesPieChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pie Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <PieChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Polar Area</CardTitle>
                </CardHeader>
                <CardContent>
                    <PolarAreaChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Polar Area Centered Point Labels</CardTitle>
                </CardHeader>
                <CardContent>
                    <PolarAreaCenteredPointLabel />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Radar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadarChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Scatter Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScatterChart />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsOther;
