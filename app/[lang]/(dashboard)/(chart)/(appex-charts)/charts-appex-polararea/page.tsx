import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicPolar from "./basic-polar";
import MonChromePolarArea from "./mono-chrome";

const PieChartPage = () => {
    return (
        <div className="grid  grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Polar Area Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicPolar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Polar Area Monochrome</CardTitle>
                </CardHeader>
                <CardContent>
                    <MonChromePolarArea />
                </CardContent>
            </Card>
        </div>
    );
};

export default PieChartPage;
