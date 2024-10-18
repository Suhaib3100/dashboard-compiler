
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TwoLevelPie from "./twolevel-pie";
import StraightAngle from "./straight-angle";
import TwoSimplePie from "./two-simple-pie";
import CustomizedLabelPie from "./customized-label-pie";
import PieChartWithPaddingAngle from "./pie-chart-with-paddingangle";
import PieWithNeedle from "./piewith-needle";

const ChartJsRechartPiePage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Two Level Pie Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <TwoLevelPie />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Straight Angle Pie Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <StraightAngle />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Two Simple Pie Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <TwoSimplePie />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pie Chart With Customized Label</CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomizedLabelPie />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pie Chart With Padding Angle</CardTitle>
                </CardHeader>
                <CardContent>
                    <PieChartWithPaddingAngle />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pie Chart With Needle</CardTitle>
                </CardHeader>
                <CardContent>
                    <PieWithNeedle />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartJsRechartPiePage;
