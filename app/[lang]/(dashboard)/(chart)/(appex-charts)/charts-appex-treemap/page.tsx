
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTreeMap from "./basic-treemap";
import MultipleSeriesTreeMap from "./multiple-series-treemap";
import ColorRange from "./color-range";
import DistributedTreeMap from "./distributed-treemap";

const TreeMapChartPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Tree Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <BasicTreeMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Multi-Dimensional Treemap Chart</CardTitle>
                </CardHeader>
                <CardContent>
                    <MultipleSeriesTreeMap />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle> Color Range</CardTitle>
                </CardHeader>
                <CardContent>
                    <ColorRange />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Distributed Tree Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <DistributedTreeMap />
                </CardContent>
            </Card>
        </div>
    );
};

export default TreeMapChartPage;
