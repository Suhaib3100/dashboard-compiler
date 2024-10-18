
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicRadialBar from "./basic-radial-bar";
import MultipleRadialBar from "./multiple-radial-bar";
import CustomAngle from "./custom-angle";
import GradiantRadialBar from "./gradiant-radial-bar";
import RadialBarWithImage from "./radialbar-with-Image";
import StrokedGauge from "./stroked-gauge";
import SemiCircleGauge from "./semi-circle-gauge";


const RadialBarsChart = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Simple Radialbar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicRadialBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle> Multiple Radialbar</CardTitle>
                </CardHeader>
                <CardContent>
                    <MultipleRadialBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle> Circle Chart - Custom Angle </CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomAngle />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle> Gradient Circle Chart </CardTitle>
                </CardHeader>
                <CardContent>
                    <GradiantRadialBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle> Radialbars with Image </CardTitle>
                </CardHeader>
                <CardContent>
                    <RadialBarWithImage />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stroked Gauge</CardTitle>
                </CardHeader>
                <CardContent>
                    <StrokedGauge />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Semi Circular Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <SemiCircleGauge />
                </CardContent>
            </Card>
        </div>
    );
};

export default RadialBarsChart;
