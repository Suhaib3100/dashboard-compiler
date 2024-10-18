import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicGroupedBar from "./basic-grouped-bar";
import StackedBarChart from "./stacked-bar";
import BasicTimeline from "./basic-timeline";
import CrosshairStackedBar from "./crosshair-stackedbar";
import BrushGroupedBar from "./brush-grouped-bar";

const ChartsUnovisBarPage = () => {
    return (
        <div className="grid   grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Grouped Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicGroupedBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Basic Grouped Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedBarChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Basic Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicTimeline />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked Bar Chart with Crosshair</CardTitle>
                </CardHeader>
                <CardContent>
                    <CrosshairStackedBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Grouped Bar with Brush and Interactive Legend</CardTitle>
                </CardHeader>
                <CardContent>
                    <BrushGroupedBar />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsUnovisBarPage;

