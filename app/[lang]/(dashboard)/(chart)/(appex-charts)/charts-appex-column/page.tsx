
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicColumn from "./basic-column";
import ColumnWithLabel from "./column-label";
import StackedColumn from "./stacked-column";
import StackedColumn2 from "./stacked-column2";
import GroupStacked from "./group-stacked";
import DumbbellChart from "./dumbbell";
import ColumnMarker from "./column-marker";
import GroupLabelColumn from "./group-label-column";
import ColumnRotateLabels from "./column-rotate-labels";
import ColumnNegativeValues from "./column-negative-values";
import DistributedChart from "./distributed-chart";

const ColumnChartPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 ">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Column Charts</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicColumn />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Column with Data Labels</CardTitle>
                </CardHeader>
                <CardContent>
                    <ColumnWithLabel />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked Columns</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedColumn />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Stacked Column 100</CardTitle>
                </CardHeader>
                <CardContent>
                    <StackedColumn2 />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Grouped Stacked Columns</CardTitle>
                </CardHeader>
                <CardContent>
                    <GroupStacked />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Dumbbell Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <DumbbellChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Column with Markers</CardTitle>
                </CardHeader>
                <CardContent>
                    <ColumnMarker />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Column with Group Label</CardTitle>
                </CardHeader>
                <CardContent>
                    <GroupLabelColumn />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Column with Rotated Labels</CardTitle>
                </CardHeader>
                <CardContent>
                    <ColumnRotateLabels />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Column with Nagetive Values</CardTitle>
                </CardHeader>
                <CardContent>
                    <ColumnNegativeValues />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Distributed Columns Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <DistributedChart />
                </CardContent>
            </Card>
        </div>
    );
};

export default ColumnChartPage;
