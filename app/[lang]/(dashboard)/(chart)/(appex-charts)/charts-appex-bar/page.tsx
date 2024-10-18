import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicBar from "./basic-bar";
import GroupedBar from "./grouped-bar";
import StackedBar from "./stacked-bar";
import StackedBar2 from "./stacked-bar2";
import GroupedStackBar from "./grouped-stack-bar";
import NegativeValuesBar from "./negative-values-bar";
import BarsWithMarkes from "./bars-with-marks";
import ReversedBar from "./reversed-bar";
import CustomLabelBar from "./custom-label-bar";
import PatternedBar from "./patterned-bar";
import BarImageChart from "./bar-image-chart";

const BarChartPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Bar Charts</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Grouped Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <GroupedBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked Bar Charts</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked Bars 100</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedBar2 />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Grouped Stacked Bars</CardTitle>
                </CardHeader>
                <CardContent>
                    <GroupedStackBar />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Bar with Negative Values</CardTitle>
                </CardHeader>
                <CardContent>
                    <NegativeValuesBar />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Bar with Markers</CardTitle>
                </CardHeader>
                <CardContent>
                    <BarsWithMarkes />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Reversed Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <ReversedBar />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Custom DataLabels Bar</CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomLabelBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Patterned Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <PatternedBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bar with Images</CardTitle>
                </CardHeader>
                <CardContent>
                    <BarImageChart />
                </CardContent>
            </Card> 
        </div>
    );
};

export default BarChartPage;