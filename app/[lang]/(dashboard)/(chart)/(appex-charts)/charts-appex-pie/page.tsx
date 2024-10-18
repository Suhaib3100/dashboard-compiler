
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicPie from "./basic-pie";
import BasicDonut from "./basic-donut";
import MonoChrome from "./mono-chrome";
import GradiantDonut from "./gradiant-donut";
import SemiDonut from "./semi-donut";
import DonutPattern from "./donut-pattern";
import ImagePie from "./image-pie";


const PieChartPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Pie Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicPie />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Basic Donut Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicDonut />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Monochrome Pie Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <MonoChrome />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Gradient Donut Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <GradiantDonut />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Semi Donut Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <SemiDonut />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Patterned Donut Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <DonutPattern />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pie with Image</CardTitle>
                </CardHeader>
                <CardContent>
                    <ImagePie />
                </CardContent>
            </Card>
        </div>
    );
};

export default PieChartPage;
