import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NonStackedArea from "./non-stacked-area";
import StackedArea from "./stacked-area";
import BaselineAreaChart from "./areawith-baseline";
import StepAreaChart from "./step-area";
const ChartsUnovisAreaPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Non-Stacked Area Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <NonStackedArea />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked Area Chart with XYLabels</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedArea />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Baseline Area Chart with XYLabels</CardTitle>
                </CardHeader>
                <CardContent>
                    <BaselineAreaChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Step Area Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <StepAreaChart />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsUnovisAreaPage;
