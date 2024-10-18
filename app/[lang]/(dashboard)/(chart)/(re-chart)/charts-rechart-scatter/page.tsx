
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicScatter from "./basic-scatter";
import ThreeDimScatter from "./threedim-scatter";
import JointLineScatter from "./jointline-scatter";
import BubbleChart from "./bubble-chart";
import ScatterChartWithLabels from "./scatterchart-withlabels";
import MultipleYAxesChart from "./multiple-yaxes-scatter";
import ScatterChartWithCells from "./scatter-chartwith-cells";

const ChartJsRechartScatterPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Scatter Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicScatter />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Three Dim Scatter Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <ThreeDimScatter />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Joint Line Scatter Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <JointLineScatter />
                </CardContent>
            </Card>
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
                    <CardTitle>Scatter Chart With Labels</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScatterChartWithLabels />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Multiple YAxes Scatter Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <MultipleYAxesChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Scatter Chart With Cells</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScatterChartWithCells />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartJsRechartScatterPage;
