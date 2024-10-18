import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicBoxPlot from "./basic-boxplot";
import HorizontalBoxPlot from "./horizontal-boxplot";
import ScatterBoxplot from "./scatter-boxplot";

const CandleStickChartPage = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Box Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BasicBoxPlot />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Boxplot with Scatter Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScatterBoxplot />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 ">
                <Card>
                    <CardHeader>
                        <CardTitle>Horizontal BoxPlot</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <HorizontalBoxPlot />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CandleStickChartPage;
