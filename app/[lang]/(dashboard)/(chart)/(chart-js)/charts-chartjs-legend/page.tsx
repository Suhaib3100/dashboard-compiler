import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LegendEvents from "./legend-events";
import LegendHTML from "./legend-html";
import PointStyle from "./point-style";
import LegendPosition from "./legend-position";
import AlignmentAndTitlePosition from "./alignment-andtitle-position";


const ChartsChartJsLegendPage = () => {
    return (
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Events</CardTitle>
                </CardHeader>
                <CardContent>
                    <LegendEvents />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>HTML Legend(incompleted)</CardTitle>
                </CardHeader>
                <CardContent>
                    <LegendHTML />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Point Style</CardTitle>
                </CardHeader>
                <CardContent>
                    <PointStyle />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Legend Position</CardTitle>
                </CardHeader>
                <CardContent>
                    <LegendPosition />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Alignment and Title Position</CardTitle>
                </CardHeader>
                <CardContent>
                    <AlignmentAndTitlePosition />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsChartJsLegendPage;
