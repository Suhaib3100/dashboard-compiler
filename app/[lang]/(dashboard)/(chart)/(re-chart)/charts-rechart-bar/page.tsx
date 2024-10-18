
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TinyBar from "./tiny-bar";
import SimpleBar from "./simple-bar";
import StackedBar from "./stacked-bar";
import MixBar from "./mix-bar";
import CustomShape from "./custom-shape";
import PositiveAndNegative from "./positive-negative-bar";
import BrushBar from "./brush-bar";
import CustomizedEventBar from "./customized-event-bar";
import BarWithMinHeight from "./barwith-minheight";
import StackedBarWithSign from "./stacked-barwith-sign";
import BiAxialBar from "./bi-axxial-bar";
import BackgroundBar from "./background-bar";
import BarChartWithMultiAxis from "./barchart-with-multixaxis";
import NoPaddingBar from "./no-padding-bar";

const ChartJsRechartBarPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Tiny Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <TinyBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Simple Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <SimpleBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Mix Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <MixBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Custom Shape Bar</CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomShape />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Positive And Negative Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <PositiveAndNegative />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Brush Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BrushBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart With Customized Event</CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomizedEventBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart With Min Height</CardTitle>
                </CardHeader>
                <CardContent>
                    <BarWithMinHeight />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart Stacked By Sign</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedBarWithSign />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bi Axial Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <BiAxialBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart Has Background</CardTitle>
                </CardHeader>
                <CardContent>
                    <BackgroundBar />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart With Multi XAxis</CardTitle>
                </CardHeader>
                <CardContent>
                    <BarChartWithMultiAxis />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart No Padding</CardTitle>
                </CardHeader>
                <CardContent>
                    <NoPaddingBar />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartJsRechartBarPage;
