
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicLine from "./basic-line";
import TinyLineChart from "./tinyline-chart";
import DashedLineChart from "./dashedline-chart";
import VerticalLineChart from "./verticalline-chart";
import BiAxialLineChart from "./biaxial-linechart";
import SpecifiedDomain from "./specified-domain";
import ConnectNulls from "./connect-nulls";
import LineChartWithPadding from "./linechart-with-padding";
import LineChartWithReferenceLines from "./reference-lines";
import CustomizedDot from "./customized-dot";
import CustomizedLabel from "./customized-label";
import SynchronizedLineChart from "./synchronized-linechart";
import MultiSeriesChart from "./multi-series";

const ChartJsRechartLinePage = () => {
    return (
        <div className="grid xl:grid-cols-2  gap-6">
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Line Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BasicLine />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Tiny Line Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TinyLineChart />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Dashed Line Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <DashedLineChart />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Vertical Line Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <VerticalLineChart />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Biaxial Line Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BiAxialLineChart />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Vertical Line Chart With Specified Domain</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <SpecifiedDomain />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart With XAxis Padding</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <LineChartWithPadding />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart With Reference Lines</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <LineChartWithReferenceLines />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Customized Dot Line Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CustomizedDot />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Customized Label</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CustomizedLabel />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart Has Multi Series</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <MultiSeriesChart />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Synchronized Line Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <SynchronizedLineChart />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart Connect Nulls</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ConnectNulls />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ChartJsRechartLinePage;
